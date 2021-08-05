import React from 'react'
import AppHeader from '../AppHeader'
import styled from 'styled-components'
import SearchPanel from '../SearchPanel'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm/PostAddForm'


export default function App() {
    return (
        <Container>
            <AppHeader />
            <SearchPanel/>
            <PostList/>
            <PostAddForm/>
        </Container>
    )
}

const Container = styled.div`
max-width:1200px;
width: 100%;
margin:0 auto; 
`