import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/headerComponent.jsx';
import Footer from './components/footerComponent.jsx';
import VendorList from './components/vendor/vendorList.jsx';
import Main from './components/mainComponent.jsx'
import {Provider} from 'react-redux';
import { ConfigureStore } from '../src/redux/configureStore'

const store = ConfigureStore()

class App extends Component {
  render() { 
    return (  
      <Provider store={store}>
        <HashRouter>
          <Main/>
        </HashRouter>
      </Provider>
    );
  }
}
 
export default App;
