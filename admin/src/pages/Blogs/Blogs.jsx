import React from 'react';
import './Blogs.css';
import {AdminNavbar, BlogList} from '../../components';

const Blogs = () => {
  return (
    <div className="dashboard-main">
        <BlogList/>
    </div>
  )
}

export default Blogs