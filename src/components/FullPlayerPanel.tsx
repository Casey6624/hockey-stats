import React from "react";
import styled, { keyframes } from "styled-components";
import PlayerCard, { Player } from "./PlayerCard";
import TeamHeader from "../components/TeamHeader";

interface Props {
  rosterPlayers: any;
  teamColour: string;
  teamName: string;
  teamAbbreviation: string;
}

const PlayerPanelContainer = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const FullPlayerPanel: React.FC<Props> = ({
  rosterPlayers,
  teamColour,
  teamName,
  teamAbbreviation,
}) => {
  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TeamHeader team={teamName} teamColour={teamColour} />
      <PlayerPanelContainer>
        {rosterPlayers.roster.map((player: Player) => (
          <PlayerCard player={player} teamColour={teamColour} />
        ))}
      </PlayerPanelContainer>
    </>
  );
};

export default FullPlayerPanel;
