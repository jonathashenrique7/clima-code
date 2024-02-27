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
        </div>
    )
}
