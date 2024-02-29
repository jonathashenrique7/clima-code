import styled from "styled-components"

import { Logo } from "../layout/logo/Logo"

const NavbarStyle = styled.div`
    background: black;
    color: white;
    padding: 8px;
`

export default function Navbar() {
    return (
        <NavbarStyle>
            <Logo />
        </NavbarStyle>
    )
}



