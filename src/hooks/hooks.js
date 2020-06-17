import { useEffect, useState } from "react"
import { teams } from "../data/teams.json"

export function useFilteredTeam(selectedTeamId = 1) {
  const [currTeamId, setCurrTeamId] = useState(selectedTeamId)
  const [foundTeam, setFoundTeam] = useState([teams.filter(({ id }) => id === selectedTeamId)[0]])
  
  useEffect(() => {
    if(currTeamId === selectedTeamId) return
    let team = [teams.filter(({ id }) => id === selectedTeamId)[0]];
    setFoundTeam(team)
    setCurrTeamId(selectedTeamId)
  }, [selectedTeamId])

  return foundTeam
  }