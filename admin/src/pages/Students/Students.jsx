import React from 'react';
import './Students.css';
import {AdminNavbar, StudentList} from '../../components';

const Students = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <StudentList/>
    </div>
  )
}

export default Students;