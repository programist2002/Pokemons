import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './components/content/content';
import Header from './components/header/header';

function App(props) {

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
