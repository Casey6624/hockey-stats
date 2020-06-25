import React from "react";
import styled from "styled-components";

interface Props {
  teamColour: string;
  playerData: any;
  playerType: string;
}

interface TeamColour {
  teamColour: string;
}

const StatsWrapper = styled.div``;

const StatsHeader = styled.h3<TeamColour>`
  color: ${(props) => props.teamColour};
`;

const StatItem = styled.h3`
  color: #f2f2f2;
`;

const PlayerStats: React.FC<Props> = ({
  teamColour,
  playerData,
  playerType,
}) => {
  if (!playerData) return <div>Loading...</div>;

  let stats = playerData.stats[0].splits[0].stat;
  console.log(stats);
  // GOALIE STATS
  if (playerData && playerType.toUpperCase() === "G") {
    return (
      <StatsWrapper>
        <StatsHeader teamColour={teamColour}>Goalie Stats</StatsHeader>
        <StatItem> Save Percentage: {stats.savePercentage} </StatItem>
        <StatItem> Saves: {stats.saves} </StatItem>
      </StatsWrapper>
    );
  }
  // PLAYER STATS
  return (
    <StatsWrapper>
      <StatsHeader teamColour={teamColour}>Player Stats</StatsHeader>
      <StatItem> Goals: {stats.goals} </StatItem>
      <StatItem> Assists: {stats.assists} </StatItem>
    </StatsWrapper>
  );
};

export default PlayerStats;
