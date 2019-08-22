/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 15:25:25
 * @LastEditTime: 2019-08-22 15:25:25
 * @LastEditors: your name
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store/store.js';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';
const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

registerServiceWorker();
