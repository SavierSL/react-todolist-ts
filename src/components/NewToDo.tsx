import React, { useRef } from "react";

export interface NewToDoProps {
  onAdd: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = ({ onAdd }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value; //this could be null so we need to add !
    onAdd(enteredText);
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo-texxt">To Do Text</label>
          <input type="text" ref={textInputRef} />
        </div>
        <button>Add Task</button>
      </form>
    </>
  );
};

export default NewToDo;
