import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex: 1 1;
  overflow-y: scroll;
  max-height: 100vh;
  background: #121212;
  width: fit-content;
`;

const ChooseTeam = styled.h1`
  font-family: "Staatliches", cursive;
`;

const TeamList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const TeamItem = styled.li<ITeamItem>`
  list-style: none;
  text-align: left;
  font-family: "Staatliches", cursive;
  padding: 0.5rem;
  h4 {
    font-size: 1.5rem;
  }
  &:hover {
    background: ${(props) => (props.isSelected ? props.teamColour : "#f2f2f2")};
    color: ${(props) => (props.isSelected ? "" : "black")};
    cursor: pointer;
  }
  color: #f2f2f2;
  background: ${(props) => (props.isSelected ? props.teamColour : "")};
`;

interface ITeamItem {
  teamColour: string;
  isSelected: Boolean;
}

interface Props {
  teams: Array<any>;
  setSelectedTeam: Function;
  teamColour: string;
  selectedTeam: Number;
}

const SideBarMenu: React.FC<Props> = ({
  teams,
  setSelectedTeam,
  teamColour,
  selectedTeam,
}) => {
  return (
    <AppContainer>
      <ChooseTeam>Team Select</ChooseTeam>
      <TeamList>
        {teams.map(({ id, name }) => (
          <TeamItem
            key={id}
            onClick={() => setSelectedTeam(id)}
            teamColour={teamColour}
            isSelected={selectedTeam === id ? true : false}
          >
            <p>{name}</p>
          </TeamItem>
        ))}
      </TeamList>
    </AppContainer>
  );
};

export default SideBarMenu;
