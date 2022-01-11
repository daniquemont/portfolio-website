import './App.css';
import React, {Component, Fragment} from 'react' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

import Socials from './components/Socials';

function App() {
  return (
    <Router>
    <Fragment>
      <Header></Header>
      <Home></Home>
      <Socials></Socials>
    </Fragment>
    </Router>
  );
}

export default App;
