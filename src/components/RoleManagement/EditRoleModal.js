import React, { useState } from 'react';

const EditRoleModal = ({ role, onClose, onUpdate }) => {
  const [name, setName] = useState(role.name);
  const [permissions, setPermissions] = useState(role.permissions.join(', '));

  const handleSubmit = () => {
    const permissionsArray = permissions.split(',').map((perm) => perm.trim());
    onUpdate({ ...role, name, permissions: permissionsArray });
  };

  return (
    <div className="modal">
      <h2>Edit Role</h2>
      <label>
        Role Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Permissions (comma-separated):
        <input type="text" value={permissions} onChange={(e) => setPermissions(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditRoleModal;
