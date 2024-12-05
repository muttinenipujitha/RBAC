// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Role-Based Access Control (RBAC) System</h1>
//       <nav>
//         <Link to="/users">Manage Users</Link>
//         <Link to="/roles">Manage Roles</Link>
//         <Link to="/permissions">Manage Permissions</Link>
//       </nav>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to the RBAC System</h1>
      <p>Select a module from the navigation bar to get started.</p>
    </div>
  );
};

export default Dashboard;


