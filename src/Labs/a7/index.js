import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

const Assignment7 = () => {
    return(
        <>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment 6</Link> |
            <Link to="/a7">Assignment 7</Link> |
            <Link to="/tuiter">Tuiter</Link>
            <h1>Assignment 7</h1>
            <ReduxExamples/>
        </>
    );
};
export default Assignment7;