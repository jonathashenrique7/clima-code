import styled from "styled-components"
import theme from "../typography/theme"

import { ImageWithSpace } from "../src/components/layout/ImageWithSpace/ImageWithSpace"
import { Logo } from "../src/components/layout/logo/Logo"
import { Input } from "../src/components/form/input/Input"
import InputWithSuggestions from "../src/components/form/input/inputWithSuggestions/InputWithSuggestions"


const StyledDiv = styled.div`
  color: white;
  background-color: white;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

const StyledInput = styled(InputWithSuggestions)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`

  @media (min-width: 750px) {
    width: 150%;
    
  }
  z-index: 100;
`

export default function HomePage() {
  return (
    <ImageWithSpace>
      <StyledDiv>
        <Logo showImage={true} type='vertical' /><br />
        <InputContainer>
          <StyledInput placeholder="Informe o nome da cidade!" />
        </InputContainer>
      </StyledDiv>
    </ImageWithSpace>
  )
}

