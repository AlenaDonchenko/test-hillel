import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './redux/Todos';


function App({ todoList, addTodo, toggleTodo }) {
    const [newTodoList, setNewTodoList] = useState('');

    const addTodoList = () => {
        if (newTodoList.trim() !== '') {
            addTodo(newTodoList);
            setNewTodoList('');
        }
    };

    return (
        <div className="App">
            <h1>Список справ</h1>
            <ul>
                {todoList.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodo(index)}
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

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    };
};

const mapDispatchToProps = {
    addTodo,
    toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
