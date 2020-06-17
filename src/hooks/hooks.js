import { useEffect, useState } from "react"
import { teams } from "../data/teams.json"

export function useFilteredTeam(selectedTeam) {
  const [currSelectedTeam, setCurrSelectedTeam] = useState(selectedTeam)
  let team
  
  useEffect(() => {
    if(currSelectedTeam === selectedTeam) return
    team = [teams.filter(({ id }) => id === selectedTeam)[0]];
    setCurrSelectedTeam(selectedTeam)
  }, [selectedTeam])
  if (team !== undefined) return team
  }