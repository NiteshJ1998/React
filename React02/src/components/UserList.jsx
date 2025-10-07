import React from "react";

function UserList() {
  const users = ["nitesh", "Poonam", "Neelam"];
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
