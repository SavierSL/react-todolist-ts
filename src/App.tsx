import React, { useState } from "react";
import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";

//we can separate this too in diff file
interface ToDosState {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDosState[]>([]);

  const handleAddToDo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const handleDelete = (toDoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== toDoId);
    });
  };
  return (
    <div className="App">
      <NewToDo onAdd={handleAddToDo} />
      <ToDoList items={todos} deleteTask={handleDelete} />
    </div>
  );
};

export default App;
