import React from 'react';
import { connect } from 'react-redux';
import { setWelcome } from '../state/actions';

const App = (props) => {
  return (
    <div>
      <h1>{props.welcome}</h1>
      <button onClick={() => props.setWelcome('bonjour')}>Click</button>
    </div>
  )
}

const mapStateToProps = state => ({
  welcome: state.welcome
});

const mapDispatchToProps = {
  setWelcome
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
