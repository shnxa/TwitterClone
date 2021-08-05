import React from 'react'
import styled from 'styled-components'

export default function AppHeader() {
    return (
        <HeaderContainer>
            <h1>TwitterClone</h1>
            <p>3 записи, из них 0 понравилось</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
font-family: 'Open Sans', sans-serif;
margin-top: 30px;

p {
    font-weight: 700;
    font-size: 1.2 em;
    opacity: 0.8;
}
`