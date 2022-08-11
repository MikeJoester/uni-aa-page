import React from 'react';
import {AdminNavbar, FeedbackList} from '../../components';

const Feedbacks = () => {
  return (
    <div className="dashboard-main">
      <AdminNavbar/>
      <FeedbackList/>
    </div>
  )
}

export default Feedbacks