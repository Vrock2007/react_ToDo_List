import React, {useState, useEffect} from 'react';
import './App.css';

//Importing COMPONENTS
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // STATES
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the APP STARTS
  useEffect(() => {
    getLocalTodos();

  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //FUNCTIONS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // SAVE LOCAL TODOS
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));    
  };
  const getLocalTodos= () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } 
    else {
     let todoLocal =  JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);      
    }
  };

  return (
    <div className="App">
      <header>
        <h1>VC's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
 