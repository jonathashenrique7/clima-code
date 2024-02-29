import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"
import { Container } from "../../../src/components/layout/container/Container"
import Card from "../../../src/components/climaCard/Card"

const Body = styled.div`
    background-color: #212222;
    min-height: 100vh;
`

const Content = styled.div`
    padding: 80px 0;
`

const Text = styled.p`
    font-size: 20px;
    color: white;
    padding: 0;
    margin: 0;
`

const CityName = styled.h2`
    font-size: 50px;
    color: orange;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

export default function InfoPage() {
    return (
        <>
            <Navbar />
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do tempo para</Text>
                        <CityName>Vitória, ES, Brasil</CityName>
                    </Content> 

                    <InfoContainer>
                        <Card />
                        <Card />
                        <Card />
                    </InfoContainer>
                </Container>
            </Body>
        </>
    )
}

