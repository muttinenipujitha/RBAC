import React, { useState } from "react";
import AddRoleModal from "./AddRoleModal";
import EditRoleModal from "./EditRoleModal";

const RoleTable = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write"] },
    { id: 2, name: "Editor", permissions: ["Read"] },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddRole = (newRole) => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    setIsAddModalOpen(false);
  };

  const handleEditRole = (updatedRole) => {
    setRoles(
      roles.map((role) =>
        role.id === updatedRole.id ? updatedRole : role
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <div>
      
      <button className="add-role-btn" style={{marginLeft:"180px",marginTop:"70px"}}onClick={() => setIsAddModalOpen(true)}>
        Add Role
      </button>
      <table style={{marginLeft:"180px",width:"70%"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setSelectedRole(role);
                    setIsEditModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteRole(role.id)}
                  style={{marginLeft:"20px"}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isAddModalOpen && (
        <AddRoleModal onClose={() => setIsAddModalOpen(false)} onAdd={handleAddRole} />
      )}
      {isEditModalOpen && selectedRole && (
        <EditRoleModal
          role={selectedRole}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleEditRole}
        />
      )}
    </div>
  );
};

export default RoleTable;


