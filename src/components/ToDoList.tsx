import React from "react";
interface ToDoListProps {
  items: { id: string; text: string }[];
  deleteTask: (toDoId: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, deleteTask }) => {
  return (
    <>
      <ul>
        {items.map((list) => {
          return (
            <div key={list.id}>
              <li>{list.text}</li>
              <button onClick={() => deleteTask(list.id)}>DEL</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
