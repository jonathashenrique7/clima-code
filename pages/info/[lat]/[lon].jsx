import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"

const Body = styled.div`
    background-color: #EFEFEF;
    min-height: 100vh;
`

export default function InfoPage() {
    return (
        <>
            <Navbar />
            <Body>Lorem ipsum</Body>
        </>
    )
}


