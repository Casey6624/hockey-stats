import React from "react";
import styled from "styled-components";
import PlayerCard, { Player } from "./PlayerCard";

interface Props {
  rosterPlayers?: any;
  teamColour: string;
}

const PlayerPanelContainer = styled.div``;

const PlayerPanel: React.FC<Props> = ({ rosterPlayers, teamColour }) => {
  if (!rosterPlayers) {
    return <div>Loading...</div>;
  }

  let filteredPlayers = rosterPlayers.roster.slice(0, 3);
  return (
    <PlayerPanelContainer>
      {filteredPlayers.map((player: Player) => (
        <PlayerCard player={player} teamColour={teamColour} />
      ))}
    </PlayerPanelContainer>
  );
};

export default PlayerPanel;
