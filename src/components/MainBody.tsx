import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0.2;
}

to {
  opacity: 1;
}
`;

const MainBodyContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  flex: 4 1;
  background-repeat: no-repeat;
  overflow-y: scroll;
  height: 100vh;
  background-size: cover;
  animation: ${fadeIn} 0.5s ease-in-out 0s forwards 1;
  background-color: ${(props) => props.teamColour};
  background-blend-mode: luminosity;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("/img/${(p: Props) => p.teamAbbreviation}.jpg");
`;
interface Props {
  children: {
    TeamBlurb?: ReactNode;
  };
  teamAbbreviation: string;
  teamColour?: string;
}

const MainBody: React.FC<Props> = ({
  teamAbbreviation,
  children,
  teamColour,
}) => {
  return (
    <MainBodyContainer
      key={teamAbbreviation}
      teamAbbreviation={teamAbbreviation}
      teamColour={teamColour}
    >
      {children}
    </MainBodyContainer>
  );
};

export default MainBody;
