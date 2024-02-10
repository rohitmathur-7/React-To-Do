import { useState } from "react";

const ToDoAddNew = ({ setNewText }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    setNewText(input);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default ToDoAddNew;
