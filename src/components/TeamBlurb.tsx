import React, { useEffect, useState } from "react";
import styled from "styled-components";
// styling
import { SideBySideFlex } from "../styling/common";
import { useHttp } from "../hooks/hooks";
import PlayerPanel from "./PlayerPanel";

interface Props {
  teamColour: string;
  team: any;
}

interface LeftPanelProps {
  teamColour: string;
}

const BlurbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Staatliches", cursive;
`;

const LeftSidePanel = styled.div<LeftPanelProps>`
  background: ${(p) => p.teamColour};
  padding: 1rem;
  text-align: right;
  border-radius: 0 12px 12px 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const RightSidePanel = styled.div`
  background: #121212;
`;

const TeamDivision = styled.h3`
  font-size: 2rem;
`;

const TeamConference = styled.h3`
  font-size: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  position: relative;
  z-index: 2;
  transform: skew(-25deg);
  width: fit-content;
  background: #121212;
  color: #f2f2f2;
`;

const TeamVenue = styled.h2`
  font-size: 2rem;
`;

const TeamBlurb: React.FC<Props> = ({ team, teamColour }) => {
  const [isLoading, data] = useHttp(
    `https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`,
    team.id
  );

  if (!team || !teamColour) return <div>Loading...</div>;

  return (
    <>
      <BlurbContainer>
        <LeftSidePanel teamColour={teamColour}>
          <TeamConference> {team.conference.name} Conference </TeamConference>
          <TeamDivision>
            <span role="img" aria-label="Stadium Image">
              🏒
            </span>
            {team.division.name} Division
          </TeamDivision>

          <TeamVenue>
            <span role="img" aria-label="Stadium Image">
              🏟️
            </span>
            {team.venue.name}
          </TeamVenue>
        </LeftSidePanel>
        <RightSidePanel>
          {!isLoading && data && <PlayerPanel rosterPlayers={data} />}
        </RightSidePanel>
      </BlurbContainer>
    </>
  );
};

export default TeamBlurb;
