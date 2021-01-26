import React from 'react'
import {withTheme} from '@emotion/react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
// import * as styles from './button.styles'

const StyledButton = styled.button`
/* width: 24%; */
font-size: 1.8rem;
font-family: "bungee", sans-serif;
color: ${props => props.textColor};

// padding: 16px;
cursor: pointer;

background: unset;
border: unset;
outline: unset;
text-align: ${props => props.align}
`;


class Button extends React.Component {
  render(){
    const {text, onClick, color, align, theme} = this.props;  
    const { color : {primary} } = theme;  
    
    let textColor;
    
    switch(color) {
      case "black":
        textColor = '#484848';
        break;
      case "red":
        textColor = '#e06262';
        break;
      default:
        textColor = '#484848';
    }
  
    return (
      <StyledButton textColor={textColor} onClick={onClick} align={align}>
        {text}
      </StyledButton>
    )
  }

  static defaultProps = {
    text : 'Button',
    color : 'black',
    align : 'left'
  }
  
  static propTypes = {
   text : PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
   color: PropTypes.oneOf(['black', 'red']),
   align: PropTypes.oneOf(['left', 'right'])
  }

}




export default withTheme(Button);