import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import AddUserModal from "../components/UserManagement/AddUserModal";
import EditUserModal from "../components/UserManagement/EditUserModal";
import "./../styles/UsersPage.css"; // Import the new CSS file

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setShowAddModal(false);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setShowEditModal(false);
  };

  return (
    <div className="users-page">
      <h1>Users Management</h1>
      <button onClick={() => setShowAddModal(true)}>Add User</button>
      <UserTable
        users={users}
        onEdit={(user) => {
          setCurrentUser(user);
          setShowEditModal(true);
        }}
      />
      {showAddModal && (
        <AddUserModal
          onAdd={handleAddUser}
          onClose={() => setShowAddModal(false)}
        />
      )}
      {showEditModal && currentUser && (
        <EditUserModal
          user={currentUser}
          onUpdate={handleEditUser}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default UsersPage;


