import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// components
import { Player } from "./PlayerCard";

interface Props {
  player: Player;
}

const FullStatsContainer = styled.div`
  background-image: url("/img/rink.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const FullStatsPanel: React.FC<Props> = ({ player }) => {
  return (
    <FullStatsContainer>
      <h1> {player.person.fullName} </h1>
    </FullStatsContainer>
  );
};

export default FullStatsPanel;
