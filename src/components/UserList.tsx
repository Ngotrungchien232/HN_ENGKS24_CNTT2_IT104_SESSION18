import React,{useMemo} from 'react'

export default function UserList() {
     // tạo mảng người dùng mẫu 
    const users = [
        {id: 1, name: "chiến ", age: 19},
        {id: 2, name: "bình mõm ", age: 16},
        {id: 3, name: "tuấn thần đèn ", age: 19},
];

    // dùng useMemo để lọc những người trên 18  tuổi 
    const Loc = useMemo(() => {
        console.log("đang lọc");
        return users.filter((user)=> user.age > 18);
    }, [users]);
  return (
    <div style={{textAlign:"center", marginTop: "20px"}}>
        <h2>danh sach người trên 18 tuổi </h2>
        <ul>
            {Loc.map((user)=> (
                <li key={user.id}>
                    {user.name} -{user.age} tuổi
                </li>
            ))}
        </ul>
    </div>
  );
}
