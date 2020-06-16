import React from 'react';

const TodosContext = React.createContext({
    todos: [
        { id: 1, text: "Eat Breakfast", complete: false },
        { id: 2, text: "Fold Laundry", complete: false },
        { id: 3, text: "Update project", complete: false }
    ]
})

export default TodosContext