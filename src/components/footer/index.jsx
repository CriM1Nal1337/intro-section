import React from "react";
import styled from 'styled-components'


function Footer() {
    return (
        <Footers>
            <p>Challenge by
            <As href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</As>. Coded by
            <As href="https://github.com/CriM1Nal1337" target="_blank"> Elton Ferreira Borges</As></p>
        </Footers>
    )
}

const Footers = styled.footer`
    font-size: 1.1rem;
    position: fixed;
    bottom: 1rem;
    display: flex;
    left: 30%;
`
const As = styled.a`
    color: hsl(228, 45%, 44%);
`

export default Footer