// UserForm.js
import React, { useState } from "react";
import UserService from "../services/UserService";

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    roles: [],
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "roles" ? handleRolesChange(value) : value,
    }));
  };

  const handleRolesChange = (rolesString) => {
    return rolesString.split(",").map((role) => role.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.createUser(user);
      setUser({
        username: "",
        password: "",
        roles: [],
        position: "",
      });
      console.log("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </label>

      <label>
        Roles:
        <input
          type="text"
          name="roles"
          value={user.roles.join(",")}
          onChange={(e) =>
            setUser((prevUser) => ({
              ...prevUser,
              roles: handleRolesChange(e.target.value),
            }))
          }
          placeholder="Comma-separated roles"
        />
      </label>

      <label>
        Position:
        <input
          type="text"
          name="position"
          value={user.position}
          onChange={handleChange}
          placeholder="Enter position"
        />
      </label>

      <button id="createbutton"type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
