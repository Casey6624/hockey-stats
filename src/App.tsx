import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teams } from "./data/teams.json";
// Components
import SidebarMenu from "./components/SideBarMenu";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(1);

  function findFilteredTeam() {
    return teams.filter(({ id }) => id === selectedTeam)[0];
  }

  return (
    <AppContainer>
      <h1>Hockey App</h1>

      <SidebarMenu teams={teams} setSelectedTeam={setSelectedTeam} />

      <div>
        <h1>Chosen Team: {findFilteredTeam().name}</h1>
      </div>
    </AppContainer>
  );
};

export default App;
