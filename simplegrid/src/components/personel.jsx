import { getPersons } from "../services/personService";
import { GridView } from "./gridView/gridView";
import React from "react";

// const columns = ['name', 'family', 'personCode', 'workplace', 'gender'];

const Personel = (props) => {
    return (<GridView dataSource={getPersons()} />);
}

export default Personel;