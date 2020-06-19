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
  background-color: red;
  background-blend-mode: luminosity;
  background-image: url("${process.env.PUBLIC_URL}/img/${(p: Props) =>
  p.imgBackground}");
`;
interface Props {
  children: {
    TeamBlurb?: ReactNode;
  };
  imgBackground: string;
}

function tintTeamBackground(imgFileName: string) {
  console.log(imgFileName);
}

const MainBody: React.FC<Props> = ({ imgBackground, children }) => {
  return (
    <MainBodyContainer key={imgBackground} imgBackground={imgBackground}>
      {children}
    </MainBodyContainer>
  );
};

export default MainBody;
