import styled from "styled-components"

const StyleContainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1440px) {
        width: 1440px;
    }
`

export const Container = ({ children }) => <StyleContainer>{ children }</StyleContainer>
