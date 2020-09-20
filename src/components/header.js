import React from 'react';
import styled from 'styled-components';
import logoSrc from '../assets/images/logo.svg'

const NavBar = styled.div`
    height: 10vh;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.img`
    margin: 20px;
    cursor: pointer;
`;
const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
const NavButton = styled.a`
    border: none;
    background-color: white;
    color: #45AA29;
    font-size: 2rem;
    font-family: Quicksand, sans-serif;
    text-decoration: none;
    font-weight: 500;
    margin: 5% 10% 5% 10%;
`;

function Header() {
    return(
        <NavBar>
            <Logo src={logoSrc} onClick={() => window.location.replace("/")} />
            <Nav>
                <NavButton href="/calculate">Calculate</NavButton>
                <NavButton href="/learn">Learn</NavButton>
                <NavButton href="/about">About</NavButton>
            </Nav>
        </NavBar>
    )
}

export default Header;