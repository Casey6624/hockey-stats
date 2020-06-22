import React from "react";
import styled from "styled-components";

interface Props {
  teamColour?: string;
  team: any;
}

const TeamDivision = styled.h3`
  font-size: 2rem;
`;

const TeamConference = styled.h3`
  font-size: 2rem;
`;

const TeamVenue = styled.h2`
  font-size: 2rem;
`;

const TeamBlurb: React.FC<Props> = ({ team, teamColour }) => {
  return (
    <>
      <TeamDivision>{team.division.name}</TeamDivision>
      <TeamVenue>{team.venue.name}</TeamVenue>
      <TeamConference>{team.conference.name}</TeamConference>
    </>
  );
};

export default TeamBlurb;
