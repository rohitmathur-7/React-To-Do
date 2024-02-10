import { useEffect } from "react";
import { useState } from "react";
import ToDoListItem from "../ToDoListItem";

const ToDoList = ({ newText, setNewText }) => {
  const [list, setList] = useState([
    { text: "Learn JS", completed: true },
    { text: "Learn CSS", completed: false },
  ]);

  const handleDelete = (text) => {
    const newArr = list.filter((item) => {
      return item.text !== text;
    });

    setList(newArr);
  };

  const handleComplete = (text) => {
    const newList = list.map((item) => {
      if (text === item.text) {
        item.completed = !item.completed;
      }
      return item;
    });

    setList(newList);
  };

  useEffect(() => {
    if (newText !== "") {
      setList((prev) => {
        const a = [...prev, { text: newText, completed: false }];
        return a;
      });
      setNewText("");
    }
  }, [newText]);

  return (
    <>
      {list.map((item) => {
        return (
          <ToDoListItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        );
      })}
    </>
  );
};

export default ToDoList;
