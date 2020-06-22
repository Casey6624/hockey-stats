import React from "react";
import TEAM_LOGOS from "../svg/TEAM_LOGOS";

export default function TeamLogo({ teamAbbr }) {
  //let logo = TEAM_LOGOS[`${team.abbreviation}`];
  function findTeamLogo(teamAbbr) {
    let foundTeam = "";
    Object.keys(TEAM_LOGOS).forEach((currTeam) => {
      if (currTeam === teamAbbr) foundTeam = currTeam;
    });
    return TEAM_LOGOS[`${foundTeam}`];
  }

  let logo = findTeamLogo(teamAbbr);

  return <div>{logo}</div>;
}
