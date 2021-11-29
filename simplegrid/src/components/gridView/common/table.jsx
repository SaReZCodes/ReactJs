import { Component } from "react";
import Like from "./like";

export class Table extends Component {
    render() {
        return (<table className="table table-sm">
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
                    this.props.dataSource.map(item => {
                        return (<tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.family}</td>
                            <td>{item.personCode}</td>
                            <td>{item.workplace.title}</td>
                            <td>{item.gender}</td>
                            <td><Like liked={item.liked} click={() => this.props.likeHandler(item)} />
                                <i className="fa fa-remove"
                                    onClick={() => this.props.removeHandler(item)}
                                    style={{ cursor: "pointer", marginLeft: "5px" }}
                                ></i>
                            </td>
                        </tr>);
                    })
                }


            </tbody>
        </table>
        );
    }
}