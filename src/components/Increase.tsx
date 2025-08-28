import React, {useReducer} from 'react'
// định nghĩa kiểu action
type Action = {type: "INCREASE"};

// hàm render: nhận state cũ và action, ttả về state mới 
function reducer(state: number, action: Action): number {
    switch(action.type) {
        case "INCREASE":
            return state + 1;
            default:
                return state;
    }
}

export default function Increase() {
    const[count, dispatch] = useReducer(reducer, 0);
  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        
        <h2>{count}</h2>
        <button onClick={()=> dispatch({type: "INCREASE"})}>Increase</button>
    </div>
  )
}
