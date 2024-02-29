import styled from "styled-components"

const CardStyle = styled.div`
    color: #323232;
    background: white;
    box-shadow: 0px 4px 4px orange;
    border-radius: 10px;
    width: 300px;
    padding: 15px;
    box-sizing: border-box;
`

const Title = styled.h6`
    font-size: 20px;
    font-weight: 700px;
    text-align: center;
    margin: 0;
    padding: 0;
`

const BasicInfo = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
`

const BasicInfoImg = styled.img`
    width: 100px;
    height: 100px;
`

const BasicInfoText = styled.div`
    text-align: center;
    flex: 1;
`

const InfoLine = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 0 15px;
`

const InfoText = styled.p`

`

const InfoTemperature = styled.span`
    font-weight: 700px;
    margin-bottom: 5px;

    ${ props => props.blue && 'color: blue;' };

    ${ props => props.red && 'color: red;' };
`

const Card = () => {
    return (
        <CardStyle>
            <Title>Lorem ipsum</Title>
            <BasicInfo>
                <BasicInfoImg src="http://openweathermap.org/img/wn/02d@2x.png" />
                <BasicInfoText>Algumas nuvens</BasicInfoText>
            </BasicInfo>
            <InfoLine>
                Temperatura<InfoTemperature>777ºC</InfoTemperature>
            </InfoLine>

            <InfoLine>
                Sensação<InfoTemperature>777ºC</InfoTemperature>
            </InfoLine>

            <InfoLine>
                Mínima<InfoTemperature blue={true}>777ºC</InfoTemperature>
            </InfoLine>

            <InfoLine>
                Máxima<InfoTemperature red={true}>777ºC</InfoTemperature>
            </InfoLine>
        </CardStyle>
    )
}

export default Card