import React, { useState } from "react";
import PermissionTable from "../components/PermissionManagement/PermissionTable";
import EditPermissionsModal from "../components/PermissionManagement/EditPermissionsModal";

const PermissionsPage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  return (
    <div>
      <h1 className="per-page" style={{marginTop:"50px"}}>Permission Management</h1>
      <PermissionTable
        onEdit={(permission) => {
          setSelectedPermission(permission);
          setShowEditModal(true);
        }}
      />
      {showEditModal && (
        <EditPermissionsModal
          permission={selectedPermission}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default PermissionsPage;


