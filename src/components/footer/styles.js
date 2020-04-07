import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: grey;
    color: black;
    padding: 2%;

`

export const FillBody = styled.div`
    min-height: 100%;
    position: static;
    background: white;
    width: 100%;
    padding: 2%;
    display: block;
    
`

export const Col = styled.div`
    height: 100%;
    width: ${props => props.width}%;
`