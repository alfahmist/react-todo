import React from 'react'
import {withTheme} from '@emotion/react'
import PropTypes from "prop-types";
import styled from '@emotion/styled'

import Container from '../../layout/Container';
import Item from '../../layout/Item';
import Button from '../button/Button';

const StyledInput = styled.input `
  background: unset;
  border: unset;
  padding: 0 64px;
  // padding-bottom: 16px;
  margin-left: 20px;
  margin-top: 20px;
  width : 90%;
  // flex: 1;

  border-bottom: 1px solid ${props => props.theme.color.primary.red};
  outline: unset;

  font-family: "Homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`
class TodoForm extends React.Component {
  state = {
    value: ""
  }

  handleFormSubmit = e => {
    const {value} = this.state;
    const {addTodo} = this.props;
    e.preventDefault();
  
  
    if(!this.state.value) {
      alert("No Blank Todo!")
      return;
    }

    if(this.state.value.length > 40 ) {
      alert("Please Create a shorter todo text");
      this.setState({
        value : ""
      });
      return;
    }
    addTodo(value);
    this.setState({
      value : ""
    })
  };

  handleOnChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render(){
    const {showAdd, theme} = this.props;
    
    if(showAdd){
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems='flex-start'>
              <Item flex='1'>
              <StyledInput theme={theme} text='text' value={this.state.value} onChange={this.handleOnChange}/>
              </Item>
              <Item margin='0 20px 0 0'>
                <Button text='ADD'/>
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  }
}

export default withTheme(TodoForm);