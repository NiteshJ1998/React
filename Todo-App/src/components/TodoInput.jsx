import { useState } from "react";

function TodoInput(todos, setTodos) {
  const [text, setText] = useState("");

  const addTodos = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { text, done: false }]);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todos "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodos}>Add</button>
    </div>
  );
}

export default TodoInput;
