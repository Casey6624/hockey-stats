import React from "react";
import styled from "styled-components";
import PlayerCard, { Player } from "./PlayerCard";

interface Props {
  rosterPlayers?: any;
  teamColour: string;
}

const PlayerPanelContainer = styled.div`
  display: flex;
`;

const ViewAllPlayers = styled.button`
  width: 100%;
  background: #121212;
  font-family: "Staatliches", cursive;
  color: #f2f2f2;
  font-size: 1.5rem;
  padding: 2rem;
  border: none;

  &::hover {
    cursor: pointer;
  }
`;

const PlayerPanel: React.FC<Props> = ({ rosterPlayers, teamColour }) => {
  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }

  let filteredPlayers = rosterPlayers.roster.slice(0, 3);
  return (
    <>
      <PlayerPanelContainer>
        {filteredPlayers.map((player: Player) => (
          <PlayerCard player={player} teamColour={teamColour} />
        ))}
      </PlayerPanelContainer>
      <ViewAllPlayers>View All Players & Stats</ViewAllPlayers>
    </>
  );
};

export default PlayerPanel;
