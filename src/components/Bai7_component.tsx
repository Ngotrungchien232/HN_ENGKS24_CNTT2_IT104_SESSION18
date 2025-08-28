import React, { useReducer, useState } from "react";

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number };

type State = string[];

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload.trim() === "") return state;
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [
    "Quét nhà",
    "Giặt quần áo",
    "Code",
  ]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
      dispatch({ type: "DELETE_TODO", payload: index });
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{ background: "red", color: "white" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
