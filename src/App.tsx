// libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// data - just about teams, player data is dynamically pulled in the hooks
import { teams } from "./data/teams.json";
// helpeers
import { useFilteredTeam, useTeamColour } from "./hooks/hooks";
// Components
import SidebarMenu from "./components/SideBarMenu";
import MainBody from "./components/MainBody";
import TeamHeader from "./components/TeamHeader";
import TeamBlurb from "./components/TeamBlurb";
import StatsPage from "./components/FullStats";

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
    <Router>
      <AppContainer>
        <FlexWrapper>
          <SidebarMenu
            teams={teams}
            setSelectedTeam={setSelectedTeam}
            teamColour={colour}
            selectedTeam={selectedTeam}
          />
          <Switch>
            <Route path="/stats">
              <MainBody
                teamAbbreivation={filteredTeam[0].abbreviation}
                teamColour={colour}
              >
                <StatsPage />
              </MainBody>
            </Route>
            <Route path="/">
              <MainBody
                teamAbbreivation={filteredTeam[0].abbreviation}
                teamColour={colour}
              >
                <TeamHeader team={filteredTeam[0]} teamColour={colour} />
                <TeamBlurb team={filteredTeam[0]} teamColour={colour} />
              </MainBody>
            </Route>
          </Switch>
        </FlexWrapper>
      </AppContainer>
    </Router>
  );
};

export default App;
