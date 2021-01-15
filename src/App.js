import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.scss';
import { registerUser } from './redux/actions';

function App(props) {
  const [formState, setFormState] = useState({firstName: '', surname: '', dob: '', gender: '', email: ''})

  useEffect(() => {
    console.log(props.value, 'props log')
  }, [props.value])

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React with me
        </a>
        <button onClick={props.registerUser}>press here for redux test</button>
        <button onClick={() => console.log(formState)}>Log State</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state
})

const mapDispatchToProps = dispatch => ({
  registerUser: () => dispatch(registerUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
