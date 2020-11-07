import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import image from './home.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.myFunction = this.myFunction.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  myFunction() {
    this.callAPI();
    alert(this.state.apiResponse);
  }

  render() {
    return (
      <>
      <div className = "Home-wrap">
          <div className = "Image-wrap">
            <img className = "Home-image" src = {image} />
          </div>
          <div className = "Home">
            <div className = "Text">
              <h1 className = "Title1">
                <span className = "Welcome">Welcome</span> to Placeholder styll, ok this man's a bean
              </h1>
              <h2 className = "Title2">
                Helping modernize the agriculture industry one farm at a time.
              </h2>
              <div className = "Btn-wrap">
                <button className = "Title-Btn">
                  Let's get started!
                  <i className="fa fa-arrow-right hvr-forward btn-arrow"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">
            Hello {this.state.apiResponse}
          </p>
          <button className="btn" id="btn" onClick={this.myFunction}>
            Button
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
  }
}

export default App;
