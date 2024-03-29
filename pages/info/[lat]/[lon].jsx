import { useState, useEffect } from "react"
import { useRouter } from "next/router"

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
    padding: 0;
    margin: 0;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`

export default function InfoPage() {
    const [currentInfo, setCurrentInfo] = useState()
    const [futureInfo, setFutureInfo] = useState()
    const router = useRouter()
    const { lat, lon } = router.query

    const fetchCurrentInfo = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const json = await response.json()
        setCurrentInfo(json)
    }

    const fetchFutureInfo = async () => {
        const response = await fetch(`https://app.seja.dev/course/cl66kmjv307140m6baltze23w/api.openweathermap.org/data/2.5/forecast?lat=${lat}&amp;lon=${lon}&amp;appid=${process.env.NEXT_PUBLIC_OWM_KEY}%20&amp;units=metric&amp;lang=pt_br`)
        const json = await response.json()
        setFutureInfo(json)
    }

    useEffect(() => {
        if (lat && lon) {
            fetchCurrentInfo()
            fetchFutureInfo()
        }
    }, [lat, lon])

    return (
        <>
            <Navbar />
            <Body>
                <Container>
                    <Content>
                        <Text>Previsão do tempo para</Text>
                        <CityName>{currentInfo?.name}, {currentInfo?.sys.country}</CityName>
                    </Content> 

                    <InfoContainer>
                        <Card 
                            title="Agora"
                            icon={currentInfo?.weather[0].icon}
                            description={currentInfo?.weather[0].description}
                            temp={currentInfo?.main.temp}
                            feels={currentInfo?.main.feels_like}
                            min={currentInfo?.main.temp_min}
                            max={currentInfo?.main.temp_max}
                        />
                        <Card 
                            title="Próximas 3 horas"
                            icon={futureInfo?.list[0].weather[0].icon}
                            description={futureInfo?.list[0].weather[0].description}
                            temp={futureInfo?.list[0].main.temp}
                            feels={futureInfo?.list[0].main.feels_like}
                            min={futureInfo?.list[0].main.temp_min}
                            max={futureInfo?.list[0].main.temp_max}
                        />
                        <Card 
                            title="Próximas 6 horas"
                            icon={futureInfo?.list[1].weather[0].icon}
                            description={futureInfo?.list[1].weather[0].description}
                            temp={futureInfo?.list[1].main.temp}
                            feels={futureInfo?.list[1].main.feels_like}
                            min={futureInfo?.list[1].main.temp_min}
                            max={futureInfo?.list[1].main.temp_max}
                        />
                    </InfoContainer>
                </Container>
            </Body>
        </>
    )
}


