import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

import {
  Stack,
  Button,
  IconButton,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  styled,
} from '@mui/material/styles';

const CreateButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#000248',
  fontSize: '20px',
  fontWeight: 'bold',
  textTransform: 'Capitalize',
  '&:hover': {
      backgroundColor: '#5b4d82',
    },
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  { field: 'class', headerName: 'Class', width: 150 },
  {
    field: 'dob',
    headerName: 'Date Of Birth',
    type: 'string',
    width: 230,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
  },
  { 
    field:'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={3} justifyContent='space-between'>
          <IconButton>
            <EditIcon/>
          </IconButton>
          <IconButton sx={{color: 'red'}}>
            <DeleteIcon/>
          </IconButton>
        </Stack>
      )
    }
  },
];

const StudentList = () => {
  const [posts, setPosts] = useState([]);
  const [className, setClassName] = useState("");
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("http://localhost:5000/students/");
      setPosts(res.data);
    }
    fetchPosts();
  }, []);

  var rows = posts.map((val) => {
    const fetchClasses = async() => {
      const res = await axios.get(`http://localhost:5000/classes/${val.class}`);
      setClassName(res.data.class_name);
    }
    fetchClasses();
    return {
      id: val.student_id,
      fullName: val.full_name,
      class: className,
      dob: new Date(val.birth_date).toDateString(),
      email: val.email
    }
  });

  return (
    <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1>Manage Students</h1>
        <CreateButton>Add Student</CreateButton>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection/>
    </Stack>
  )
}

export default StudentList;