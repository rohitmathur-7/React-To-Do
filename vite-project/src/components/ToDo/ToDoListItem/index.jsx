const ToDoListItem = ({ text, completed, handleDelete, handleComplete }) => {
  const handleChange = () => handleComplete(text);
  const handleRemove = () => handleDelete(text);

  return (
    <div style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <div>
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </p>
      </div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default ToDoListItem;
