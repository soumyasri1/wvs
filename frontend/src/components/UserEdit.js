import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

const UserEdit = ({ userId, onClose, onUserUpdated }) => {
  const [editedUser, setEditedUser] = useState({
    username: "",
    password: "",
    roles: "",
    position: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await UserService.getUserById(userId);
        setEditedUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await UserService.updateUser(userId, editedUser);
      onUserUpdated();
      onClose();
      console.log("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={editedUser.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Roles:
          <input
            type="text"
            name="roles"
            value={editedUser.roles}
            onChange={handleChange}
          />
          {/* Note: This assumes roles are entered as a comma-separated string */}
        </label>
        <br />

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={editedUser.position}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Update User</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserEdit;
