import styled from "styled-components"

const InputStyle = styled.input`
    color: #5C5C5C;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    background-color: #f6f6f6;
    border: 0;
    outline: none; 
    padding: 18px;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`

export const Input = (props) => {
    return (
        <InputStyle {...props} />
    )
}

