import { teams } from "../data/teams.json";

export function findTeamIdByName(teamName) {
  let foundTeam = teams.filter((team) => {
    return team.abbreviation === teamName;
  });
  return foundTeam;
}
