import styled from "styled-components"

import { Logo } from "../layout/logo/Logo"
import { Container } from "../layout/container/Container"

const NavbarStyle = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
`

export default function Navbar() {
    return (
        <NavbarStyle>
            <Container>
                <Logo />
            </Container>
        </NavbarStyle>
    )
}



