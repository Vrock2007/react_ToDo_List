import React from 'react';
//Import COMPONENTS
import Todo from './Todo';


const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-conatiner">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};


export default TodoList;

