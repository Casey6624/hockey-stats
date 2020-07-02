import React from "react"
import styled from "styled-components"
// components 
import { Player } from "./PlayerCard"

interface Props {
    player: Player
}

const FullStatsContainer = styled.div`
    position: absolute;
    left: 50%;
    background: red;
`

const FullStatsPanel: React.FC<Props> = ({ player }) => {
    return<FullStatsContainer>
        <h1> {player.person.fullName} </h1>
    </FullStatsContainer>
}

export default FullStatsPanel