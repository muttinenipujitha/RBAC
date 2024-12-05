import React, { useState } from 'react';

const EditPermissionsModal = ({ permission, onClose, onUpdate }) => {
  const [name, setName] = useState(permission.name);

  const handleSubmit = () => {
    onUpdate({ ...permission, name });
  };

  return (
    <div className="modal">
      <h2>Edit Permission</h2>
      <label>
        Permission Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditPermissionsModal;

