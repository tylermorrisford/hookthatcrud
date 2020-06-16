import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import TodosContext from './context'
import TodosReducer from './reducer'
import TodoList from './Components/TodoList'
import * as serviceWorker from './serviceWorker';

const App = () => {
    
    const initialState = useContext(TodosContext)
    const [state, dispatch] = useReducer(TodosReducer, initialState)

    return(
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodosContext.Provider>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
