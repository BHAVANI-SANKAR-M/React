import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Home from './Home';
// import Props from './Props';
// import Demo from './demo';
// import Demo2 from './Demo2';
// import Todo2 from './Todo2';
//import Todo1 from './Todo1';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { TodoWrapper } from './components/TodoWrapper';
import { EditTodoForm } from './components/EditTodoForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Home />
    <Props />
    <Demo />
    <Demo2 />   */}
    {/* <Todo2 /> */}
    {/* < Todo1 /> */}
    <Todo />
    <TodoForm />
    <TodoWrapper />
    <EditTodoForm />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

