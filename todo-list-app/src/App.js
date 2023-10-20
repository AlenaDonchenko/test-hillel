import React, { useState } from "react";
import './App.css';

function App() {
    const [todoList, setTodoList] = useState([
        { text: "справа1", completed: false },
        { text: "справа2", completed: false },
        { text: "справа3", completed: false },
        { text: "справа4", completed: false },
        { text: "справа5", completed: false }
    ]);

    const [newTodoList, setNewTodoList] = useState('');



    const addTodoList = () => {
        if (newTodoList.trim() !== '') {
            setTodoList([...todoList, { text: newTodoList, completed: false }]);
            setNewTodoList('');
        }
    };

    const toggleTodoList = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].completed = !updatedTodoList[index].completed;
        setTodoList(updatedTodoList);
    }

    return (
        <div className="App">
            <h1>Список справ</h1>
            <ul>
                {todoList.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodoList(index)}
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Додати нову справу"
                    value={newTodoList}
                    onChange={(e) => setNewTodoList(e.target.value)}
                />
                <button onClick={addTodoList}>Додати</button>
            </div>
        </div>
    );
}

export default App;
