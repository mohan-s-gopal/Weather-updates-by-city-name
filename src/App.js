import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './component/Weather/Weather'
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Weather />
      </Container>
    );
  }
}

export default App;
