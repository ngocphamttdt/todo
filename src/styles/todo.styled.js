import styled from "styled-components";

export const TodoWrapper = styled.div`
    border: 1px gray solid;
    box-shadow: 1px gray;
    width: 300px;
    height: 400px;

    margin: 40px auto;
    display:flex;
    flex-direction: column;
    gap:3px;
    padding: 10px;
`

export const TodoFormWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    gap:3px;
    padding: 10px;
`

export const TodoInput = styled.div`
    flex-glow: 2;
`