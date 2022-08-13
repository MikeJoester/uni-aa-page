import React from 'react';
import {AdminNavbar, StudentList} from '../../components';

const ClassList = () => {
  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <StudentList/>
    </div>
  )
}

export default ClassList;