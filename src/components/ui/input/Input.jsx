import styled, {css} from 'styled-components';

const Input = styled.input`
    grid-area: "inputPass";
    padding: 9px;
    font-size: 20px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: black;
    width: max-content;
    justify-self: center;
    align-self: center;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 1px 0px 6px rgba(35,48,9,.20);
    text-shadow: 0px 0px 0px rgba(0,0,0,.0);

    :focus {
    outline:none;
    box-shadow: 5px 0px 6px rgba(35,48,9,.20);
}

 ${props => props.primary && css`
    grid-area: "inputPhone";
  `} 
  
 ${props => props.secondary && css`
    grid-area: inputN;
    margin-right: 25px;
    justify-self: right;
    width: 200px;
  `}
  
  ${props => props.danger && css`
    grid-area: inputL;
    margin-right: 25px;
    width: 200px;
    justify-self: right;
  `}
    
  ${props => props.basic && css`
    grid-area: inputD;
    margin-right: 25px;
    justify-self: right;
    width: 200px;
  `}
  
`

export default Input;