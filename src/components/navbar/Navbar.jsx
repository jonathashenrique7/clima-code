import styled from "styled-components"
import { useRouter } from "next/router"

import { Logo } from "../layout/logo/Logo"
import { Container } from "../layout/container/Container"

const NavbarStyle = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
`

const StyleLogo = styled.div`
    cursor: pointer;
`

export default function Navbar() {
    const router = useRouter()

    return (
        <NavbarStyle>
            <Container>
                <StyleLogo onClick={() => router.push('/')}>
                    <Logo />
                </StyleLogo>
            </Container>
        </NavbarStyle>
    )
}



