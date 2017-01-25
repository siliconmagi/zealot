// This is the entry point for our client-side logic
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { observable } from 'mobx';
import { Router } from 'inferno-router';
import createHistory from 'history/createHashHistory';
import views from './views';

// We render our react app into this element
const app = document.getElementById('app');
const history = createHistory();

Inferno.render(
  <Provider>
  <Router history={ history }>
  { views }
  </Router>
  </Provider>, app)
