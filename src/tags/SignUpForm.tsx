import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components';
import config from '../config';
import {
  CognitoUser, CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials, Config } from 'aws-sdk';

interface MyProps {}
interface MyState {}

export default class Layout extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  

  render() {
    return (
      <form>
      <input type='text' placeholder='email' />
      <input type='password' placeholder='password' />
      <input type="submit"/>
      </form>
    );
  }
};
