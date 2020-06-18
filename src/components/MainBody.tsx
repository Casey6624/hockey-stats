import React, { useEffect, useState, ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
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
  background-color: red;
  animation: ${fadeIn} 1s forwards;
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

const MainBody: React.FC<Props> = ({ imgBackground, children }) => {
  return (
    <MainBodyContainer imgBackground={imgBackground}>
      {children}
    </MainBodyContainer>
  );
};

export default MainBody;
