import {
    useParams
  } from "react-router-dom";
const About = (props) => {
    let { id } = useParams();
    return (<h1>My Name Is Saeed {id}</h1>)
}

export default About;