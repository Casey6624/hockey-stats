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
  imgFile = imgFile.split(".")[0];

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

  const colour = function foundColour({
    redTeams,
    ylwGoldTeams,
    greenTeams,
    blackWhiteTeams,
    orangeTeams,
    tealTeams,
    blueTeams,
  }) {
    const red = redTeams.includes(imgFile) ? "red" : "";
    const yellow = ylwGoldTeams.includes(imgFile) ? "yellow" : "";
    const green = greenTeams.includes(imgFile) ? "green" : "";
    const black = blackWhiteTeams.includes(imgFile) ? "black" : "";
    const orange = orangeTeams.includes(imgFile) ? "orange" : "";
    const teal = tealTeams.includes(imgFile) ? "teal" : "";
    const blue = blueTeams.includes(imgFile) ? "blue" : "";

    return `${red + yellow + green + black + orange + teal + blue}`;
  };

  return colour;
}
