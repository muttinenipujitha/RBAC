import React, { useState } from 'react';
import EditPermissionsModal from './EditPermissionsModal';

const PermissionTable = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Read' },
    { id: 2, name: 'Write' },
    { id: 3, name: 'Delete' },
  ]);

  const [selectedPermission, setSelectedPermission] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditPermission = (updatedPermission) => {
    setPermissions(
      permissions.map((perm) =>
        perm.id === updatedPermission.id ? updatedPermission : perm
      )
    );
    setIsEditModalOpen(false);
  };

  return (
    <div>
      
      <table style={{marginLeft:"180px",width:"70%",marginTop:"130px"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm) => (
            <tr key={perm.id}>
              <td>{perm.name}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedPermission(perm);
                    setIsEditModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && selectedPermission && (
        <EditPermissionsModal
          permission={selectedPermission}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleEditPermission}
        />
      )}
    </div>
  );
};

export default PermissionTable;

