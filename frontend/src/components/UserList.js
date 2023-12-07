import React, { useState } from "react";
import UserEdit from "./UserEdit";

const UserList = ({ users, onDelete, onEdit }) => {
  const [editUserId, setEditUserId] = useState(null);

  const handleEdit = (user) => {
    setEditUserId(user.id);
  };

  const handleUserUpdated = () => {
    setEditUserId(null);
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Roles</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.roles.join(", ")}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUserId && (
        <UserEdit
          userId={editUserId}
          onClose={() => setEditUserId(null)}
          onUserUpdated={handleUserUpdated}
        />
      )}
    </div>
  );
};

export default UserList;
