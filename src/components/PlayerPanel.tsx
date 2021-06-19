import React, { useMemo } from "react";
import styled from "styled-components";
import PlayerCard, { Player } from "./PlayerCard";
import { Link } from "react-router-dom";

interface Props {
  rosterPlayers?: any;
  teamColour: string;
  teamAbbr: string;
}

const PlayerPanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const ViewAllPlayers = styled.button`
  width: 100%;
  background: #121212;
  font-family: "Staatliches", cursive;
  color: #f2f2f2;
  font-size: 1.5rem;
  padding: 2rem;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const PlayerPanel: React.FC<Props> = ({
  rosterPlayers,
  teamColour,
  teamAbbr = "",
}) => {
  const filteredPlayers = useMemo(() => {
    if (!rosterPlayers) return null;
    return rosterPlayers.roster.slice(0, 3);
  }, [rosterPlayers]);

  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PlayerPanelContainer>
        {filteredPlayers.map((player: Player) => (
          <PlayerCard
            key={`${player.person.id}`}
            player={player}
            teamColour={teamColour}
          />
        ))}
      </PlayerPanelContainer>
      <Link to={`/stats/${teamAbbr}`}>
        <ViewAllPlayers>View All {teamAbbr} Players & Stats</ViewAllPlayers>
      </Link>
    </>
  );
};

export default PlayerPanel;
