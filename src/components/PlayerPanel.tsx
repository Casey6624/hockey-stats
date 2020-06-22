import React from "react";
import styled from "styled-components";
import PlayerCard, { Player } from "./PlayerCard";

interface Props {
  rosterPlayers?: any;
}

const PlayerPanel: React.FC<Props> = ({ rosterPlayers }) => {
  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }

  let filteredPlayers = rosterPlayers.roster.slice(0, 3);
  return (
    <>
      {filteredPlayers.map((player: Player) => (
        <PlayerCard player={player} />
      ))}
    </>
  );
};

export default PlayerPanel;
