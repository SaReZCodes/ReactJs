import react, { Component } from 'react';

import './App.css';
import UserInput from './components/user-input';
import UserOutput from './components/user-output';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'saeed'
    }
  }

  render() {
    console.log(this.state.username);
    return (
      <div className="App">
        <UserInput change={this.usernameChangeHandler} newValue={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div >
    );
  }

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }

}

export default App;
