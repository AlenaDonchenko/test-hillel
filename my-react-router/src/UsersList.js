import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import './UsersList.css'
const UserList = () => {
    const [users, setUser] = useState([]);


    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching user: ', error))
    }, [])


return (
    <div className="container">
        <h2>Список користувачів</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.username} ({user.email})
                    <Link to={`/albums/${user.id}`}>.   Показати альбоми</Link>
                </li>
            ))}
        </ul>
    </div>
);
};

export default UserList;