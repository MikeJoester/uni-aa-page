import React from 'react';
import './Students.css';
import {StudentList, AdminNavbar, MajorList} from '../../components';

const Students = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        {/* <StudentList/> */}
        <MajorList/>
    </div>
  )
}

export default Students;