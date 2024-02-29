import styled from "styled-components"
// 
const Img = styled.div``

const VerticalText = styled.h1`
    font-size: 70px;
    color: #242424;
    line-height: 70px;
    margin-left: 185px;
    margin-top: -100px;
`

const PrimaryColor = styled.span`
    color: darkorange;
`

const HorizontalText = styled.h1`
    font-size: 38px;
    display: flex;
`

const CodeStyle = styled.h1`
    color: darkorange;
    font-size: 38px;
`

export const Logo = ({ showImage, type }) => {
    return (
        <div>
            { 
                showImage && <img src="/woman.svg" /> 
            }

            { type === 'vertical' && 
                <VerticalText>
                    Clima <br /><PrimaryColor>Code</PrimaryColor>
                </VerticalText> }    

            {
                type === 'horizontal' && 
                    <HorizontalText>
                        Clima<CodeStyle>Code</CodeStyle>
                    </HorizontalText>
            }
        </div>
    )
}

Logo.defaultProps = { type: 'horizontal', }