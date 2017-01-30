import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
// import { region, UserPoolId, ClientId } from '../config';
import {
  CognitoUser, CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials, Config } from 'aws-sdk';


interface MyProps {}
interface MyState {}

export default class Layout extends Component<MyProps, MyState> {
  state = {
    password: '',
    email: '',
    message: 'hi',
  }

  handleSubmit = () => {
    console.log(this.state.message)
  }
  handleEmailChange = () => {
    console.log(this.state.message)
  }
  handlePasswordChange = () => {
    console.log(this.state.message)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type='text'
      placeholder='email'
      value={this.state.email}
      onChange={this.handleEmailChange}
      />
      <input type='password'
      placeholder='password'
      value={this.state.password}
      onChange={this.handlePasswordChange}
      />
      <input type="submit"/>
      </form>
    );
  }
};
