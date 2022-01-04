import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 1`

const Background = styled.Image`
    width : 400px;
    overflow: hidden;
    justify-content: center;`

const BackgroundImage = ({source}) => {
    return (
        <Container>
            <Background source={source} />
        </Container>
    )
}
export default BackgroundImage