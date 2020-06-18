import React, { useEffect, useState, ReactNode } from "react";
import styled from "styled-components";

const MainBodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 4 1;
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
