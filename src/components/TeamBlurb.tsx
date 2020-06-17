import React from "react"
import styled from "styled-components"
// shared styling 
import { SpaceAroundFlex } from "../styling/common"

const TeamName = styled.h3`
    font-size: 2rem;
`

const TeamDivision = styled.h3`
    font-size: 2rem;
`

const TeamVenue = styled.h2`
    font-size: 2rem;
`

interface Props {
    team: any
}

 const TeamBlurb: React.FC<Props> = ({ team }) => {
    return(
    <>
    <SpaceAroundFlex>
        <TeamName>
            {team.name}
        </TeamName>
        <TeamVenue>
            {team.venue.name}
        </TeamVenue>
    </SpaceAroundFlex>
    <TeamDivision>
        {team.division.name}
    </TeamDivision>
    </>
    )
 }


 export default TeamBlurb