import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teams } from "./data/teams.json";
// helpeers
import { useFilteredTeam, useTeamColour } from "./hooks/hooks";
// Components
import SidebarMenu from "./components/SideBarMenu";
import MainBody from "./components/MainBody";
import TeamBlurb from "./components/TeamBlurb";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(1);
  const filteredTeam = useFilteredTeam(selectedTeam);
  let colour = useTeamColour(filteredTeam[0].abbreviation);

  return (
    <AppContainer>
      <FlexWrapper>
        <SidebarMenu
          teams={teams}
          setSelectedTeam={setSelectedTeam}
          teamColour={colour}
          selectedTeam={selectedTeam}
        />
        <MainBody
          teamAbbreivation={filteredTeam[0].abbreviation}
          teamColour={colour}
        >
          <TeamBlurb team={filteredTeam[0]} teamColour={colour} />
        </MainBody>
      </FlexWrapper>
    </AppContainer>
  );
};

export default App;
