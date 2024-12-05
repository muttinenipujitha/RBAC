import React, { useState } from 'react';

const AddRoleModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');

  const handleSubmit = () => {
    const permissionsArray = permissions.split(',').map((perm) => perm.trim());
    onAdd({ name, permissions: permissionsArray });
  };

  return (
    <div className="modal">
      <h2>Add Role</h2>
      <label>
        Role Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Permissions (comma-separated):
        <input type="text" value={permissions} onChange={(e) => setPermissions(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddRoleModal;

