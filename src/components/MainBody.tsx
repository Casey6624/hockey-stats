import React, { useEffect, useState, ReactNode } from "react";
import styled from "styled-components";

const MainBodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 4 1;
  background: darkgrey;
`;

interface Props {
    children: {
        TeamBlurb?: ReactNode
    }
}

const MainBody: React.FC<Props> = ( props ) => {
  return (
    <MainBodyContainer>
        {props.children}
    </MainBodyContainer>
  );
};

export default MainBody;
