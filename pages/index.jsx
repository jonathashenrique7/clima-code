import styled from "styled-components"
import theme from "../typography/theme"

import { ImageWithSpace } from "../src/components/layout/ImageWithSpace/ImageWithSpace"
import { Logo } from "../src/components/layout/logo/Logo"

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

export default function HomePage () {
  return (
    <ImageWithSpace>
      <StyledDiv>
        <Logo showImage={true} type='vertical' />
        <input />
      </StyledDiv>
    </ImageWithSpace>
  )
}

