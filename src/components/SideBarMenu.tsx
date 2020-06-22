import React from "react";
import styled from "styled-components";
import TeamLogos from "../svg/TEAM_LOGOS";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex: 1 1;
  overflow-y: scroll;
  max-height: 100vh;
  background: #121212;
  width: fit-content;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ChooseTeam = styled.div`
  font-family: "Staatliches", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: whitesmoke;

  h3 {
    margin: 0.5rem;
    font-size: 1.25rem;
  }
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
      <ChooseTeam>
        {TeamLogos.NHL} <h3>Team Select</h3>
      </ChooseTeam>
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
