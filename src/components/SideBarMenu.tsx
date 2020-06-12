import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

interface Props {
  teams: Object;
  setSelectedTeam: Function;
}

const SideBarMenu: React.FC<Props> = ({ teams, setSelectedTeam }) => {
  return (
    <AppContainer>
      <h1>Hockey App</h1>
      {teams.map(({ id, name }) => (
        <p key={id} onClick={() => setSelectedTeam(id)}>
          {name}
        </p>
      ))}

      <div>
        <h1>Chosen Team: {findFilteredTeam().name}</h1>
      </div>
    </AppContainer>
  );
};

export default SideBarMenu;
