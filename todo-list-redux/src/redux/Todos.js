const initialState = {
    todoList: [
        { text: 'справа1', completed: false },
        { text: 'справа2', completed: false },
        { text: 'справа3', completed: false },
        { text: 'справа4', completed: false },
        { text: 'справа5', completed: false },
        { text: 'справа6', completed: false },
    ],
};

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
        text,
    },
});

export const toggleTodo = (index) => ({
    type: 'TOGGLE_TODO',
    payload: {
        index,
    },
});




const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { text: action.payload.text, completed: false },
                ],
            };
        case 'TOGGLE_TODO':
            const updatedTodoList = [...state.todoList];
            updatedTodoList[action.payload.index].completed = !updatedTodoList[action.payload.index].completed;
            return {
                ...state,
                todoList: updatedTodoList,
            };

        default:
            return state;
    }
};

export default todosReducer;
