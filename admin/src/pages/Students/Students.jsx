import React from 'react';
import './Students.css';
import {StudentList, AdminNavbar} from '../../components';

const Students = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <StudentList/>
    </div>
  )
}

export default Students;