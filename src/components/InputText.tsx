import React, { useReducer } from "react";

// 1. Định nghĩa action type
type Action = { type: "CHANGE_TEXT"; payload: string };

// 2. Hàm reducer quản lý state
function reducer(state: string, action: Action): string {
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.payload; // cập nhật state bằng giá trị mới
    default:
      return state;
  }
}

// 3. Component InputText
export default function InputText() {
  // useReducer(reducer, initialState)
  const [text, dispatch] = useReducer(reducer, "");

  // hàm xử lý khi input thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_TEXT", payload: e.target.value });
  };

  return (
    <div style={{ fontFamily: "sans-serif", margin: "20px", textAlign: "center" }}>
      <h2>{text || "Nhập vào ô dưới đây..."}</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ padding: "5px", width: "250px" }}
      />
    </div>
  );
}
