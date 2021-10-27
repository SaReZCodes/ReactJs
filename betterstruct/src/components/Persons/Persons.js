import { Component } from 'react';
import Person from './Person/Person';

// const persons = (props) => props.persons.map((person, index) => {
//     console.log('[Persons.js] render');
//     return <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={(event) => props.changed(event, person.id)} />
// })


class persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons changed...?');
        if (nextProps.persons !== this.props.person ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked) {
            console.log('[Persons.js] shouldComponentUpdate', true);
            return true;
        } else {
            console.log('[Persons.js] shouldComponentUpdate', false);
            return false;
        }
    }

    render() {
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            }));
    }
}

export default persons;