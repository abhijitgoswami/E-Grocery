import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/mainComponent.jsx'
import {Provider} from 'react-redux';
import { ConfigureStore } from '../src/redux/configureStore'
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const store = ConfigureStore()

const options = {
  position: positions.MIDDLE,
  timeout:2500,
  offset: '10px',
  transition: transitions.SCALE,
  type: types.SUCCESS
}

class App extends Component {
  render() { 
    return (  
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <HashRouter>
            <Main/>
          </HashRouter>
        </AlertProvider>
      </Provider>
    );
  }
}
 
export default App;
