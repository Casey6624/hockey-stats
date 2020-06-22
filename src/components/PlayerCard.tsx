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

interface TeamColourItem {
  teamColour: string;
}

interface Props {
  player: Player;
  teamColour: string;
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

const PositionType = styled.h3`
  font-size: 1.5rem;
  font-family: "Staatliches", cursive;
  color: #f2f2f2;
`;

const Position = styled.h3<TeamColourItem>`
  font-size: 1.5rem;
  font-family: "Staatliches", cursive;
  color: #f2f2f2;
  padding: 0.25rem;
  background: ${(props) => props.teamColour};
  position: relative;
  z-index: 2;
  transform: skew(-15deg);
  width: fit-content;
  color: #f2f2f2;
`;

const CardHeader = styled.div<TeamColourItem>`
  width: 160px;
  height: 150px;
  margin: -0.5rem;
  transform: skew(20deg);
  background: ${(props) => props.teamColour};
  z-index: -1;
  position: absolute;
`;

const PlayerName = styled.h3`
  font-family: "Josefin Slab", serif;
  color: #f2f2f2;
  font-size: 2rem;
`;

const HeightAndWeight = styled.p`
  font-family: "Josefin Slab", serif;
  color: #f2f2f2;
  font-size: 1rem;
`;

const PlayerCard: React.FC<Props> = ({ player, teamColour }) => {
  const image = usePlayerImage(player.person.id);
  console.log(image);
  if (!player) {
    return <div>Loading...</div>;
  }
  return (
    <CardContainer>
      <CardHeader teamColour={teamColour} />
      <SideBySideFlex>
        <Position teamColour={teamColour}>{player.position.code}</Position>
        <PositionType>{player.position.type}</PositionType>
      </SideBySideFlex>
      <PlayerImage src={`${image}`} />
      <PlayerName> {player.person.fullName} </PlayerName>
      <HeightAndWeight># {player.jerseyNumber}</HeightAndWeight>
    </CardContainer>
  );
};

export default PlayerCard;
