import react, { Component } from "react";
import Radium from 'radium';

class PersonList extends Component {

    state = {
        personList: [{ id: 1, name: 'saeed' }, { id: 2, name: 'reza' }, { id: 3, name: 'mohmood' }, { id: 4, name: 'ali' }]
    };

    removeHandler(id) {
        let plist = this.state.personList;
        plist.splice(id, 1);
        this.setState({ personList: plist });
    }

    render() {

        let personClass = [];
        if (this.state.personList.length <= 2) {
            personClass.push('red');
        }

        if (this.state.personList.length <= 1) {
            personClass.push('bold');
        }
        return (

            <ul className={personClass.join(' ')}>
                {this.state.personList.map((person, index) => {
                    return <li key={person.id}>
                        <button style={this.buttonStyle} key={person.id} onClick={this.removeHandler.bind(this, index)}>X</button>
                        {person.id}
                        ,
                        {person.name}

                    </li>

                })}
            </ul>
        )

        // this.buttonStyle.backgroundColor = 'red';
        // this.buttonStyle[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }
    }

    buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': { //Working by radium
            backgroundColor: 'lightgreen',
            color: 'black'
        },
        '@media (min-width: 500px)' : {
            //Working by radium
        }
    }

}

export default Radium(PersonList);