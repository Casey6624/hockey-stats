import React, { useEffect, useState, ReactNode } from "react";
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
  background-size: cover;
  animation: ${fadeIn} 0.5s ease-in-out 0s forwards 1;
  background-color: ${(props) => props.teamColour};
  background-blend-mode: luminosity;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.5)), url("${
                         process.env.PUBLIC_URL
                       }/img/${(p: Props) => p.teamAbbreivation}.jpg");
`;
interface Props {
  children: {
    TeamBlurb?: ReactNode;
  };
  teamAbbreivation: string;
  teamColour?: string;
}

const MainBody: React.FC<Props> = ({
  teamAbbreivation,
  children,
  teamColour,
}) => {
  return (
    <MainBodyContainer
      key={teamAbbreivation}
      teamAbbreivation={teamAbbreivation}
      teamColour={teamColour}
    >
      {children}
    </MainBodyContainer>
  );
};

export default MainBody;
