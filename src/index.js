import './styles.css';
//import { Todo } from './classes/todo.class.js';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml (todo));

//const tarea = new Todo('Aprender Javascript!!');

//todoList.nuevoTodo (tarea);


//console.log (todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key', 'ABC1234');

// setTimeout (() => {

//    localStorage.removeItem('mi-key');

//}, 1500);