import { Component } from "react";
import Pagination from './common/pagination';
import { Table } from "./common/table";

export class GridView extends Component {
    state = {
        dataSource: [],
        pageSize: 5,
        currentPage: 1
    }

    componentDidMount() {
        this.setState({ dataSource: this.props.dataSource });
    }

    render() {
        const data = this.paginate();
        return (
            <div>
                <Table
                    dataSource={data}
                    likeHandler={this.likeHandler}
                    removeHandler={this.removeHandler} />

                <div className="row">
                    <nav className="navbar navbar-light bg-light  justify-content-center">
                        <div className=" mr-sm-2">
                            <Pagination
                                dataSize={this.state.dataSource.length}
                                pageSize={this.state.pageSize}
                                onPageChange={this.onPageChangeHandler}
                                currentPage={this.state.currentPage} />
                        </div>

                        <div className="my-2" style={{ marginLeft: "5px" }}>
                            <select value={this.state.pageSize} className="form-control" onChange={this.pageSizeChangeHandler.bind(this)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

    pageSizeChangeHandler(event) {
        this.setState({ pageSize: parseInt(event.target.value) });
    }

    likeHandler = (dataItem) => {
        const _dataSource = [...this.state.dataSource];
        const _index = _dataSource.indexOf(dataItem);
        const _dataItem = { ..._dataSource[_index] };
        if (dataItem.liked === false)
            _dataItem.liked = true;
        else
            _dataItem.liked = false;

        _dataSource[_index].liked = _dataItem.liked;

        this.setState({ dataSource: _dataSource });
    }

    removeHandler = (item) => {
        const list = [this.state.dataSource.filter(data => data.id !== item.id)];
        this.setState({ list });
    }

    onPageChangeHandler = (page) => {
        this.setState({ currentPage: page });
    }

    paginate() {
        const _dataSource = this.props.dataSource;
        const first = (this.state.currentPage - 1) * this.state.pageSize;
        const last = first + this.state.pageSize;
        return _dataSource.slice(first, last);
    }

}