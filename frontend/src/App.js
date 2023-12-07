import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import userService from './services/UserService';
import  "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await userService.getAllUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  const createUser = async (user) => {
    const createdUser = await userService.createUser(user);
    setUsers([...users, createdUser]);
  };

  const deleteUser = async (userId) => {
    await userService.deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h1 id="heading">User Management System</h1>
      <UserForm onUserCreated={createUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
};

export default App;
