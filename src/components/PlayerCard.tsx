import React from "react";
import styled, { keyframes } from "styled-components";
// styles
import { SideBySideFlex } from "../styling/common";
// hooks
import { usePlayerImage, usePlayerStats } from "../hooks/hooks";
// components
import PlayerStats from "../components/PlayerStats";

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

const swingIn = keyframes`
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  background: #121212;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0.5rem;
  z-index: 10;
  flex: 1 1 0px;
  flex-basis: 0;
  animation: ${swingIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`;

const PlayerImage = styled.img`
  border-radius: 50%;
  width: 80%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
  width: 168px;
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

const JerseyNumber = styled.p`
  font-family: "Josefin Slab", serif;
  color: #f2f2f2;
  font-size: 1rem;
`;

const PlayerCard: React.FC<Props> = ({ player, teamColour }) => {
  const image = usePlayerImage(player.person.id);
  const [isLoading, data] = usePlayerStats(player.person.id);
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
      <JerseyNumber># {player.jerseyNumber}</JerseyNumber>
      {!isLoading && (
        <PlayerStats
          teamColour={teamColour}
          playerData={data}
          playerType={player.position.code}
        />
      )}
    </CardContainer>
  );
};

export default PlayerCard;
