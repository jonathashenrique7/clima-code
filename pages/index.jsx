import styled from "styled-components"
import theme from "../typography/theme"

import { ImageWithSpace } from "../src/components/layout/ImageWithSpace/ImageWithSpace"


const StyledDiv = styled.div`
  
  background-color: yellow;
  
  * {
    margin: 0;
    padding: 0;
  }
`

export default function HomePage () {
  return (
    <ImageWithSpace>
      <StyledDiv>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, excepturi unde? Soluta ipsam dolores aliquid numquam eos rem cum voluptates officia ut at odit enim, non culpa commodi id quibusdam.
      </StyledDiv>
    </ImageWithSpace>
  )
}

