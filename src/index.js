import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const UserContext = React.createContext()

const user = {
  username: 'Tyler',
  greeting: 'Hey there, mister '
}

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
