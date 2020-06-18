import { useEffect, useState } from "react";
import { teams } from "../data/teams.json";
import styled, { keyframes } from "styled-components";

export function useFilteredTeam(selectedTeamId = 1) {
  const [currTeamId, setCurrTeamId] = useState(selectedTeamId);
  const [foundTeam, setFoundTeam] = useState([
    teams.filter(({ id }) => id === selectedTeamId)[0],
  ]);

  useEffect(() => {
    if (currTeamId === selectedTeamId) return;
    let team = [teams.filter(({ id }) => id === selectedTeamId)[0]];
    setFoundTeam(team);
    setCurrTeamId(selectedTeamId);
  }, [selectedTeamId]);

  return foundTeam;
}

export function useBackgroundAnimation(changedOrInitialBG) {
  const [activeBackground, setActiveBackground] = useState(changedOrInitialBG);
  const [transition, setTransition] = useState(
    `${fadeIn} 0.5s ease-in-out 0s forwards 1`
  );

  const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

  useEffect(() => {
    if (activeBackground != changedOrInitialBG)
      setActiveBackground(changedOrInitialBG);
    setTransition(`${fadeIn} 0.5s ease-in-out 0s forwards 1`);
    setTimeout(() => {
      setTransition("");
    }, 2000);
  }, [changedOrInitialBG]);

  return transition;
}
