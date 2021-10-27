import react, { PureComponent } from "react";
import Person from './Person/Person';
//https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48#:~:text=Pure%20Components%20in%20React%20are,component%20is%20not%20re%2Drendered.
//Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values 
class PersonsPureComponent extends PureComponent {
    render() {
        console.log('PersonsPureComponent changed...?');
        return (
            <ul style={{ backgroundColor: '#F6BB42' }}>
                {this.props.persons.map((person, index) => {
                    return (
                        <li key={person.id}>
                            <Person
                                click={() => this.props.clicked(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.props.changed(event, person.id)}
                            />
                        </li>
                    )
                })
                }
            </ul>
        );
    }
}

export default PersonsPureComponent;


//https://reactjs.org/docs/react-api.html#reactpurecomponent
// React.PureComponent
// React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

// If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.