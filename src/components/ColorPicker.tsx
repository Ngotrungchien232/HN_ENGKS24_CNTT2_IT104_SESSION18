import React, {useState, useCallback} from 'react'

export default function ColorPicker() {
    const[color, setColor] = useState("#ffffff");

    // callback 
    const handleChangeColor = useCallback(
       (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
       },
       []
    );
  return (
    <div style={{textAlign:"center", marginTop: "20px"}}>
        <h2>Chọn màu </h2>
        {/* logic cho phép chọn màu  */}
        <div style={{marginBottom: "15px"}}>
            <label>màu người dùng chọn: </label>
            <br />
            <input type="color"
              value={color}
              onChange={handleChangeColor}  
            />
        </div>

        {/* hiển thị màu người dùng chọn */}
        <div>
            <label>màu hiển th: </label>
            <div style={{
                width: "120px",
                height:"60px",
                border: "1px solid #ccc",
                background: color,
            }}>

            </div>
        </div>
    </div>
  )
}
