import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 20rem;
    height: 100vh;
    
    overflow: auto;
    overflow: overlay; 
`

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    
    width: 100%;
    margin: auto;
    padding: 3.5rem 4rem;

    font-family: 'Poppins', sans-serif;
`