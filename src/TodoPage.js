import TodoList from "./todoList";
import {useState} from 'react';

export default function TodoPage() {
    const [newTask, setTask] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const tod = {"text":newTask, "position": -1};

        fetch("http://localhost:3000/todos", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tod)})
            .then(() => {
                console.log("add item");
                console.log(tod);
            })  
    }


    return (
        <div className="todolist">
            <h3>All todos!</h3>
            <form className="addList" onSubmit={handleSubmit}>
                <label>
                    <input name="newItem" value={newTask} onChange={(e) =>setTask(e.target.value)}/>
                </label>
                <button className="submitButton">Add Task!</button>
            </form>
            <TodoList/>
        </div>
    );
}