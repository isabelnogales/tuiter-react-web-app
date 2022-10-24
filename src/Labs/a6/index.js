import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-ouput";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <Classes/>
            <br></br>
            <Styles/>
            <br></br>
            <ConditionalOutput/>
            <br></br>
            <TodoItem/>
            <br></br>
            <TodoList/>



        </div>
    );
}
export default Assignment6;