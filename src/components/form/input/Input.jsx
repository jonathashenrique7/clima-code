import styled from "styled-components"

const InputStyle = styled.input`
    color: darkorange; 
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    background-color: #F4F6F2;
    border: 0;
    width: 100%;
    outline: none; 
    padding: 18px;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`

export const Input = (props) => {
    return <InputStyle {...props} />
}

