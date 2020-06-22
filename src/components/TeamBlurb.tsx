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

const TeamDivision = styled.h3`
  font-size: 2rem;
`;

const TeamConference = styled.h3`
  font-size: 2rem;
`;

const TeamVenue = styled.h2`
  font-size: 2rem;
`;

interface Props {
  teamColour?: string;
  team: any;
}

const TeamBlurb: React.FC<Props> = ({ team, teamColour }) => {
  return (
    <>
      <SpaceAroundFlex>
        <TeamName>{team.name}</TeamName>
        <TeamLogo teamAbbr={team.abbreviation} />
      </SpaceAroundFlex>

      <TeamDivision>{team.division.name}</TeamDivision>
      <TeamVenue>{team.venue.name}</TeamVenue>
      <TeamConference>{team.conference.name}</TeamConference>
    </>
  );
};

export default TeamBlurb;
