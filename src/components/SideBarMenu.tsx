import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex: 1 1;
  overflow-y: scroll;
  max-height: 100vh;
  background: #121212;
`;

const ChooseTeam = styled.h1`
  font-family: "Staatliches", cursive;
`;

const TeamList = styled.ul`
  width: 100%;
  margin: 0;
`;

const TeamItem = styled.li`
  list-style: none;
  text-align: left;
  font-family: "Staatliches", cursive;
  h4 {
    font-size: 1.5rem;
  }
  &:hover {
    background: red;
  }
  color: #f2f2f2;
`;

interface Props {
  teams: Array<any>;
  setSelectedTeam: Function;
}

const SideBarMenu: React.FC<Props> = ({ teams, setSelectedTeam }) => {
  return (
    <AppContainer>
      <ChooseTeam>Team Select</ChooseTeam>
      <TeamList>
        {teams.map(({ id, name }) => (
          <TeamItem key={id} onClick={() => setSelectedTeam(id)}>
            <h4>{name}</h4>
          </TeamItem>
        ))}
      </TeamList>
    </AppContainer>
  );
};

export default SideBarMenu;
