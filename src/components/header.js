import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    height: 10vh;
    background-color: white;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.img`

`;
const Nav = styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
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
    margin: 5%;
`;

function Header() {
    return(
        <NavBar>
            <Logo />
            <Nav>
                <NavButton href="/calculate">Calculate</NavButton>
                <NavButton href="/learn">Learn</NavButton>
                <NavButton href="/about">About</NavButton>
            </Nav>
        </NavBar>
    )
}

export default Header;