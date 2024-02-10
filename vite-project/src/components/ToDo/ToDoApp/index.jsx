import { useState } from "react";
import ToDoAddNew from "../ToDoAddNew";
import ToDoList from "../ToDoList";

const ToDoApp = () => {
  const [newText, setNewText] = useState("");

  return (
    <div>
      <ToDoAddNew setNewText={setNewText} />
      <ToDoList newText={newText} setNewText={setNewText} />
    </div>
  );
};

export default ToDoApp;
