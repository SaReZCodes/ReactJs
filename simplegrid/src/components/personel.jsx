import { Component } from "react";
import { getPersons } from "../services/personService";
import Like from "./common/like";
import Pagination from './common/pagination';

export class Personel extends Component {
    state = {
        persons: getPersons(),
        pageSize: 5,
        currentPage: 1
    }

    render() {
        return (
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">family</th>
                        <th scope="col">personCode</th>
                        <th scope="col">workplace</th>
                        <th scope="col">gender</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.persons.map(item => {
                            return (<tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.family}</td>
                                <td>{item.personCode}</td>
                                <td>{item.workplace.title}</td>
                                <td>{item.gender}</td>
                                <td><Like liked={item.liked} click={() => this.likeHandler(item)} />
                                    <i className="fa fa-remove"
                                        onClick={() => this.removeHandler(item)}
                                        style={{ cursor: "pointer", marginLeft: "5px" }}
                                    ></i>
                                </td>

                            </tr>);
                        })
                    }

                    <Pagination
                        dataSize={this.state.persons.length}
                        pageSize={this.state.pageSize}
                        onPageChange={this.onPageChangeHandler}
                        currentPage={this.state.currentPage} />
                </tbody>
            </table>

        )
    }

    likeHandler = (person) => {
        const _persons = [...this.state.persons];
        const _index = _persons.indexOf(person);
        const _person = { ..._persons[_index] };
        if (person.liked === false)
            _person.liked = true;
        else
            _person.liked = false;

        _persons[_index].liked = _person.liked;

        this.setState({ _persons });
    }

    removeHandler = (person) => {
        const list = [this.state.persons.filter(item => item.id !== person.id)];

        console.log(list);
        this.setState({ list });
    }

    onPageChangeHandler = (page) => {

    }
}