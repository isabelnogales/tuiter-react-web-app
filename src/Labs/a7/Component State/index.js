import {useState} from "react";


const ComponentState = () => {

    // EXAMPLE 1

    //variable (counter) , function (the one im going to be able to modify the value)
    // for function always setNameVar
    // you can put the initial value inside useState()
    const [counter,setCounter]=useState(321)
    const upCounter = () => {
        setCounter (counter + 1);

    }
    const downCounter = () => {
        setCounter ( counter - 1);
    }

    // EXAMPLE 2

    const array=[123,234];
    const [c,d]= array;

    return(
        <>
            <h2>Component State {counter}</h2>
            <h3>Counter</h3>
            counter={counter}
            <button onClick={upCounter} >UP</button>
            <button onClick={downCounter} >DOWN</button>
            <hr/>
        </>
    );
}
export default ComponentState;