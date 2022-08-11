import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Stack,
  Button,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  TextField,
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Sender', width: 290 },
  {
    field: 'semester',
    headerName: 'Date',
    type: 'string',
    width: 250,
  },
  {
    field: 'desc',
    headerName: 'Description',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 250,
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

const FeedbackList = () => {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async() => {
      const res = await axios.get("http://localhost:5000/courses/");
      setCourses(res.data);
      console.log(res.data)
    }
    fetchCourses();
  }, []);

  // var rows = courses.map((val) => {
  //   return {
  //     id: val.course_code,
  //     name: val.course_name,
  //     credits: val.credit,
  //     semester: val.semester,
  //     optional: val.optional
  //   }
  // });
  var rows = [];

  return (
    <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1>View Feedbacks from students / clients</h1>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={rows} 
        columns={columns} 
        pagesize={10} 
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection/>
    </Stack>
  )
}

export default FeedbackList;