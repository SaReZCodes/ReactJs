import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import PersonsPureComponent from '../components/Persons/PersonsPureComponent';
import Manager from '../components/Manager/Manager';
import withClass from '../hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Saeed Rezaei', age: 32 },
      { id: 'vasdf1', name: 'Ali Joudi', age: 31 },
      { id: 'asdf11', name: 'Mahyar Shirdel', age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    console.log('[App.js] getDerivedStateFromProps ->State', state);
    return state;
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    let pureComponentPersons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
      pureComponentPersons = <PersonsPureComponent
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <withClass classes={classes.App}>
        <Manager
          showPersons={this.state.showPersons}
          length={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
        {persons}
        {pureComponentPersons}
      </withClass>
    );
  }
}

export default App;
