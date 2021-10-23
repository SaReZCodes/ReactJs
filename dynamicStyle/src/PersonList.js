import react, { Component } from "react";

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
                        <button onClick={this.removeHandler.bind(this, index)}>X</button>
                        {person.id}
                        ,
                        {person.name}

                    </li>

                })}
            </ul>
        )
    }

}

export default PersonList;