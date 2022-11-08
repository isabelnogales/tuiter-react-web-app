import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // extract "Hello World" from reducer
    const message = useSelector((state) => state.hello.message);
    return(
        //render <h3>Hello world <h3/>
        <h3>{message}</h3>
    );
};

export default HelloReduxExampleComponent;

