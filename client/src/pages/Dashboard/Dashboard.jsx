import React from 'react';
import {AdminNavbar, DashboardMain} from '../../components';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <DashboardMain/>
    </div>
  )
}

export default Dashboard;