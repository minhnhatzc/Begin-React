import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
