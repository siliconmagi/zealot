import Inferno from 'inferno';
import { Link } from 'inferno-router';
import styled from 'styled-components';

const Header = styled.header`
list-style: none;
display: -webkit-flex;
display: flex;
-webkit-align-items: center;
align-items: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-flex-direction: row;
flex-direction: row;
-webkit-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-flex-flow: row wrap;
flex-flow: row wrap;
-webkit-align-content: flex-end;
align-content: flex-end;
-webkit-padding-start: 0px;
padding: 0;
margin: 0;
`;

const Title = styled(Link)`
float: left;
margin: 0;
padding: 0 1em 0 1em;
font-size: 24px;
line-height: $header-height;
font-weight: 400;
color: white;
`;

const Nav = styled.nav`
float: right;
border-radius: 10px;
`;

const Nlink = styled(Link)`
background: papayawhip;
padding: 0 10px 0 10px;
margin: 0 10px 0 10px;
font-size: 22px;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
border-radius: 5px;
`;

export default function () {
  return (
    <Header>
    <Title to="/">Nightshell</Title>
    <Nav>
    <Nlink to="/">Home</Nlink>
    <Nlink to="/blog">Blog</Nlink>
    <Nlink to="/about">About</Nlink>
    </Nav>
    </Header>
  )
}
