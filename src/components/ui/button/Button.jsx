import styled, {css} from 'styled-components';

const Button = styled.button`
    background-color:transparent;
    place-self: center;
    border-radius:5px;
    border: 1px solid #18ab29;
    margin-top: 0;
    display: inline-block;
    cursor:pointer;
    color: rgb(61, 117, 0);
    width: auto;
    font-family:Arial;
    font-size:17px;
    padding:10px 40px;
    outline: none;
    text-decoration:none;
    text-shadow: 0px 0px 10px #2f6627;
    grid-area: "buttonFunc";
    transition-duration: 0.4s;
    
    :hover {
    background-color: ${props => props.primary ? 'transparent' : 'rgb(61, 117, 0)' };
    color: ${props => props.primary ? 'black' : 'white' };
    text-shadow: ${props => props.primary ? 'rgb(27 25 25 / 40%) 3px 3px 5px' : 0 };
  }
  
   ${props => props.primary && css`
    grid-area: "buttonChange";
    text-shadow: 0px 0px 10px #2f6627;
    margin-top: 10px;
    border: 0;
  `} 
  
    ${props => props.secondary && css`
    grid-area: button;
    text-align: center;
    align-self: center;
  `}

`

export default Button;