import { render } from "@testing-library/react";
import react from "react";

const getPageNumbers = (dataSize, pageSize) => {
    const size = Math.ceil(dataSize / pageSize);
    const pages = [];
    if (size <= 1)
        return null;
    else {
        for (let index = 1; index <= size; index++) {
            pages.push(index);
        }
        return pages;
    }
}

const Pagination = (props) => {
    const pages = getPageNumbers(props.dataSize, props.pageSize);

    if (!pages)
        return null;
    else
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {
                        pages.map(
                            item => {
                                return (<li className="page-item">
                                    <a className="page-link" style={{ cursor: "pointer" }} >
                                        {item}
                                    </a>
                                </li>)
                            }
                        )
                    }
                </ul>
            </nav>
        )
}

export default Pagination;