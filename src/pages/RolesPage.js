import React, { useState } from "react";
import RoleTable from "../components/RoleManagement/RoleTable";
import AddRoleModal from "../components/RoleManagement/AddRoleModal";
import EditRoleModal from "../components/RoleManagement/EditRoleModal";

const RolesPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editRole, setEditRole] = useState(null);

  return (
    <div>
      <h1 className="role-page" style={{marginTop:"50px"}}>Role Management</h1>
      
      <RoleTable
        onEdit={(role) => {
          setEditRole(role);
          setShowEditModal(true);
        }}
      />
      {showAddModal && <AddRoleModal onClose={() => setShowAddModal(false)} />}
      {showEditModal && (
        <EditRoleModal
          role={editRole}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default RolesPage;

