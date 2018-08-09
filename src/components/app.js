import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Todo_list from './todo_list';



const App = () => (
    <div className= "container">
        <h1 className="center">To Do List</h1>
        <Todo_list/>
    </div>
);

export default App;
