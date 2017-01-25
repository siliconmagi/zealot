//style entry
import Inferno from 'inferno'
import Component from 'inferno-component'
import Header from './Header'
import styled from 'styled-components';
import { injectGlobal } from 'styled-components'

interface MyProps {}
interface MyState {}

injectGlobal`
body {
margin: 0px;
}`;



const Wrapper = styled.section`
background: #BF0040;
`;

export default class Layout extends Component<MyProps, MyState> {
  render({ children }) {
    return (
      <Wrapper>
      <div>
      <Header/>
      {children}
      </div>
      </Wrapper>
    );
  }
}
