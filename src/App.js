import React, {useContext} from 'react';
import {UserContext} from './index';

export default function App() {

    const value = useContext(UserContext)

    return(
    <div>{value.greeting}{value.username}</div>
        // <UserContext.Consumer>
        //     {user=> <div>{user.greeting}{user.username}</div>}
        // </UserContext.Consumer>
    )
}