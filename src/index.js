import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { Router} from 'react-router';
import configureStore from './stores/configureStore';

const store = configureStore();
// 定义根路由
const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('components/Main').default,
    childRoutes: [
      require('components/market/route')
    ]
  } ]
}

// Render the main component into the dom

render((
	<Provider store = {store}>
    <Router history={browserHistory} routes={rootRoute}/>
	</Provider>),document.getElementById('app')
);
