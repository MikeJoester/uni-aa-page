import React from 'react';
import {CourseList, AdminNavbar} from '../../components';

const Courses = () => {
  return (
    <div className="dashboard-main">
      <AdminNavbar/>
      <CourseList/>
    </div>
  )
}

export default Courses