import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teams } from "./data/teams.json";
// helpeers
import { useFilteredTeam } from "./hooks/hooks"
// Components
import SidebarMenu from "./components/SideBarMenu";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(1);

  const filteredTeam = useFilteredTeam(selectedTeam)

  if(filteredTeam){
    console.log(filteredTeam)
  }
  return (
    <AppContainer>
      <h1>Hockey App</h1>

      <SidebarMenu teams={teams} setSelectedTeam={setSelectedTeam} />

      <div>
        <h1>Chosen Team: </h1>
      </div>
    </AppContainer>
  );
};

export default App;
