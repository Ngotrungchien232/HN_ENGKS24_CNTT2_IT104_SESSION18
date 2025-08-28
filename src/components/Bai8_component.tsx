import React, { useReducer, useState } from "react";

// Định nghĩa các action
type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number };

type State = string[];

// Reducer quản lý state
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

// Component Modal
const ConfirmModal: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ onConfirm, onCancel }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          minWidth: "250px",
        }}
      >
        <p style={{color:"black"}}>Bạn có chắc chắn muốn xóa công việc này?</p>
        <button onClick={onConfirm} style={{ marginRight: "10px" }}>
          OK
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [
    "Quét nhà",
    "Giặt quần áo",
    "Code",
  ]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleDeleteClick = (index: number) => {
    setDeleteIndex(index);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      dispatch({ type: "DELETE_TODO", payload: deleteIndex });
    }
    setShowModal(false);
    setDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteIndex(null);
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
              onClick={() => handleDeleteClick(index)}
              style={{ background: "red", color: "white" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      {showModal && (
        <ConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default TodoApp;
