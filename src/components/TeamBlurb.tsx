import React, { ReactElement } from "react";
import styled from "styled-components";
// shared styling
import { SpaceAroundFlex } from "../styling/common";
import TeamLogo from "./TeamLogo";

const TeamName = styled.h3`
  font-size: 4rem;
  font-family: "Great Vibes", cursive;
  color: #f2f2f2;
  padding: 1rem;
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
  team: any;
  teamColour: string;
}

const TeamBlurb: React.FC<Props> = ({ team, teamColour }) => {
  //let logo = TEAM_LOGOS[`${team.abbreviation}`];

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
