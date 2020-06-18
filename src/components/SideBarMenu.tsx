import React, { useEffect, useState } from "react";
import styled from "styled-components";
// helpers
import { useFilteredTeam } from "../hooks/hooks";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex: 1 1;
  overflow-y: scroll;
  max-height: 90vh;
`;

interface Props {
  teams: Array<any>;
  setSelectedTeam: Function;
}

const SideBarMenu: React.FC<Props> = ({ teams, setSelectedTeam }) => {
  return (
    <AppContainer>
      <h1>Choose Team</h1>
      {teams.map(({ id, name }) => (
        <div key={id} onClick={() => setSelectedTeam(id)}>
          <p>{name}</p>
        </div>
      ))}
    </AppContainer>
  );
};

export default SideBarMenu;
