import React from 'react';
import './Students.css';
import {StudentList} from '../../components';

const Students = () => {
  return (
    <div className="dashboard-main">
        <StudentList/>
    </div>
  )
}

export default Students;