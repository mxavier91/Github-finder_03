import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users'
import './App.css';

// With Class based Components, you MUST remember to use the keyword extends
class App extends Component {

  // render() is a LifeCycle Method. There are other lifecycle methods, but render() is the only one that is REQUIRED!!!!!
  render() {
    // JSX MUST HAVE one parent div element
    return (
      // Use React.Fragment, is you don't want the div element to show up in the DOM
      // <Fragment>
      <div className="App">
        <Navbar icon="fab fa-github" title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
      // </Fragment>
    );
  }
}

export default App;
