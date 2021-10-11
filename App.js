import logo from './logo.svg';
import React, { Component, useState  } from "react";
import './App.css';
import Page from './component/page';
//import { Router,Route } from 'react-router';
import {BrowserRouter as  Router, Switch, Route, Link} from "react-router-dom";

export default function App() {

  return (
    <div className="App">
<Router>
  <main>
      <Route path="/" exact component={Page} />
      </main>
</Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
    }


