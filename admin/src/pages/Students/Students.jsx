import React from 'react';
import './Students.css';
import {AdminNavbar, MajorList} from '../../components';

const Students = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <MajorList/>
    </div>
  )
}

export default Students;