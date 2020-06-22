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
export function useTeamColour(imgFile = "NJD.jpg") {
  const RED_COLOUR = "#a6192e";
  const YELLOW_COLOUR = "#FFB915";
  const GREEN_COLOUR = "#006847";
  const BLACKW_COLOUR = "black";
  const ORANGE_COLOUR = "#fa4616";
  const TEAL_COLOUR = "#006D75";
  const BLUE_COLOUR = "#0038A8";

  const teamsDividedByColour = {};
  teamsDividedByColour.redTeams = [
    "CAR",
    "COL",
    "OTT",
    "FLA",
    "NJD",
    "ARI",
    "WSH",
    "CGY",
    "DET",
    "CHI",
    "MTL",
  ];
  teamsDividedByColour.ylwGoldTeams = [
    "VGK",
    "NSH",
    "BOS",
    "BUF",
    "ANA",
    "PIT",
  ];
  teamsDividedByColour.greenTeams = ["MIN", "DAL"];
  teamsDividedByColour.blackWhiteTeams = ["LAK"];
  teamsDividedByColour.orangeTeams = ["PHI", "NYI", "EDM"];
  teamsDividedByColour.tealTeams = ["SJS"];
  teamsDividedByColour.blueTeams = [
    "TBL",
    "CBJ",
    "TOR",
    "STL",
    "WPG",
    "VAN",
    "NYR",
  ];

  function foundColour({
    redTeams,
    ylwGoldTeams,
    greenTeams,
    blackWhiteTeams,
    orangeTeams,
    tealTeams,
    blueTeams,
  }) {
    const red = redTeams.includes(imgFile) ? RED_COLOUR : "";
    const yellow = ylwGoldTeams.includes(imgFile) ? YELLOW_COLOUR : "";
    const green = greenTeams.includes(imgFile) ? GREEN_COLOUR : "";
    const black = blackWhiteTeams.includes(imgFile) ? BLACKW_COLOUR : "";
    const orange = orangeTeams.includes(imgFile) ? ORANGE_COLOUR : "";
    const teal = tealTeams.includes(imgFile) ? TEAL_COLOUR : "";
    const blue = blueTeams.includes(imgFile) ? BLUE_COLOUR : "";

    return `${red + yellow + green + black + orange + teal + blue}`;
  }

  return foundColour(teamsDividedByColour);
}
