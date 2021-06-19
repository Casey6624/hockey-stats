import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// helpers
import { findTeamIdByName } from "../helpers/helpers.js";
// hooks
import { useHttp } from "../hooks/hooks";
// components
import FullPlayerPanel from "../components/FullPlayerPanel";

interface Props {
  teamColour: string;
  teamName: string;
  teamAbbreviation: string;
}

const PlayerPanelContainer = styled.div`
  display: flex;
`;

const FullStats: React.FC<Props> = ({
  teamColour,
  teamName,
  teamAbbreviation,
}) => {
  const { team } = useParams<{ team: string }>();
  const [isLoading, data] = useHttp(
    `https://statsapi.web.nhl.com/api/v1/teams/${
      findTeamIdByName(team.toUpperCase())[0].id
    }/roster`,
    [team]
  );

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <PlayerPanelContainer>
      <FullPlayerPanel
        rosterPlayers={data}
        teamColour={teamColour}
        teamName={teamName}
        teamAbbreviation={teamAbbreviation}
      />
    </PlayerPanelContainer>
  );
};

export default FullStats;
