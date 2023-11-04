import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import todosReducer from './redux/Todos';
import './index.css'

const store = createStore(todosReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);