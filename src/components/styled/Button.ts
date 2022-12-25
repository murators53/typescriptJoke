import { DefaultTheme  } from "styled-components";
import styled from "styled-components";

interface ButtonProps {
    theme:DefaultTheme
}

const Button = styled.button<ButtonProps>`
    padding:5px 10px;
    background-color: #CDD9E5;
    font-weight:bold;
    font-size: 16px;
    color: ${ ({theme}) => theme.colors.purple};
    border-radius: ${ ({theme}) => theme.borderRadius};
    `
    
    export default Button
