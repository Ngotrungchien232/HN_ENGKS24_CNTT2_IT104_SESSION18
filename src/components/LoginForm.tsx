import React, {useState, useCallback} from 'react'

export default function LoginForm() {
    // state cho email và pass
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // sử dụng userCallback để tạo như đè bài yêu cầu
    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            console.log({
                email: email,
                password: password,
            });
        },
        [email, password]
    );
  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "10px"}}>
                <label>email</label>
                <br />
                <input type="text"
                value={email}
                placeholder='nhập emnail...'
                onChange={(e) => setEmail(e.target.value)}
/>
            </div>

               <div style={{marginBottom: "10px"}}>
                <label>password</label>
                <br />
                <input type="text"
                value={password}
                placeholder='nhập password...'
                onChange={(e) => setPassword(e.target.value)}
/>
            </div>
            <button type="submit">Submit </button>
        </form>
    </div>
  )
}
