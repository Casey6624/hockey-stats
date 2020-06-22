import React from "react";
import styled from "styled-components";
// styles
import { SideBySideFlex } from "../styling/common";
// hooks
import { usePlayerImage } from "../hooks/hooks";

export interface Player {
  jerseyNumber: Number;
  person: {
    fullName: string;
    id: Number;
    link: string;
  };
  position: {
    abbreviation: string;
    code: string;
    name: string;
    type: string;
  };
}

interface Props {
  player: Player;
}

const CardContainer = styled.div`
  background: #121212;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0.5rem;
  z-index: 10;
`;

const PlayerImage = styled.img`
  border-radius: 50%;
  width: 80%;
`;

const PositionAndType = styled.h3`
  font-size: 1.5rem;
  font-family: "Staatliches", cursive;
  color: #f2f2f2;
`;

const CardHeader = styled.div`
  width: 150px;
  height: 150px;
  margin: -0.5rem;
  transform: skew(20deg);
  background: red;
  z-index: -1;
  position: absolute;
`;

const PlayerCard: React.FC<Props> = ({ player }) => {
  const image = usePlayerImage(player.person.id);
  console.log(image);
  if (!player) {
    return <div>Loading...</div>;
  }
  return (
    <CardContainer>
      <CardHeader />
      <SideBySideFlex>
        <PositionAndType>{player.position.code}</PositionAndType>
        <PositionAndType>{player.position.type}</PositionAndType>
      </SideBySideFlex>
      <PlayerImage src={`${image}`} />
    </CardContainer>
  );
};

export default PlayerCard;
