import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
// shared styling
import { SpaceAroundFlex } from "../styling/common";
import TeamLogo from "./TeamLogo";

const TeamName = styled.div`
  font-size: 4rem;
  font-family: "Great Vibes", cursive;
  color: #f2f2f2;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: relative;
  z-index: 2;
  transform: skew(-25deg);
  width: fit-content;
  background: #121212;
`;

interface Props {
  teamColour?: string;
  team: any;
}

const TeamHeader: React.FC<Props> = ({ team, teamColour }) => {
  return (
    <>
      <SpaceAroundFlex>
        <TeamName>{team.name}</TeamName>
        <TeamLogo teamAbbr={team.abbreviation} />
      </SpaceAroundFlex>
    </>
  );
};

export default TeamHeader;
