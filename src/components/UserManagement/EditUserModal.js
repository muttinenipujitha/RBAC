import React, { useState } from "react";
import "../../styles/Modal.css";
const EditUserModal = ({ user, onUpdate, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = () => {
    if (!name || !email || !role) {
      alert("Please fill all fields!");
      return;
    }
    const updatedUser = { id: user.id, name, email, role };
    onUpdate(updatedUser);
  };

  return (
    <div className="modal">
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditUserModal;

