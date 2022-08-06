import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './StudentList.css';

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
import GradingIcon from '@mui/icons-material/Grading';

import {
  styled,
} from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  fontFamily: 'Lato',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

const CreateButton = styled(Button)(() => ({
  color: '#fff',
  height:'100%',
  backgroundColor: '#000248',
  fontSize: '20px',
  fontWeight: 'bold',
  textTransform: 'Capitalize',
  '&:hover': {
      backgroundColor: '#5b4d82',
    },
}));


const StudentList = () => {
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //axios
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const fetchStudents = async() => {
      const res = await axios.get("http://localhost:5000/classlist/");
      setStudentList(res.data)
    }
    fetchStudents();
  }, [studentList]);

  const columns = [ //columns label
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
    width: 180,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <IconButton>
            <EditIcon/>
          </IconButton>
          <Link to={"/grades/"+params.row.email}>
            <IconButton>
              <GradingIcon/>
            </IconButton>          
          </Link>
          <IconButton sx={{color: 'red'}}>
            <DeleteIcon/>
          </IconButton>
        </Stack>
      )
    }
  },
  ];

  var rows = studentList.map((val) => {
    return {
      id: val.student_id,
      fullName: val.full_name,
      class: val.class.class_name,
      dob: new Date(val.birth_date).toDateString(),
      email: val.email
    }
  });

  return (
    <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{height:'5%'}}>
        <h1>Manage Students</h1>
        <CreateButton onClick={handleOpen}>Add Student</CreateButton>
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
              <Stack sx={style} spacing={3} direction="column">
                  <h2>Add New Student Information To The Database</h2>
                  <Stack direction="row" spacing={4}>
                    <Stack direction="column" spacing={3}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" />
                      <Stack direction="row" sx={{width:'100%'}} alignItems="center" spacing={3}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                      </Stack>
                      <TextField id="outlined-basic" label="Birth Date" variant="outlined" />
                      <TextField id="outlined-basic" label="Gender" variant="outlined" />
                      <TextField id="outlined-basic" label="Major" variant="outlined" />
                    </Stack>
                    <Stack direction="column" spacing={3}>
                      <TextField id="outlined-basic" label="Class" variant="outlined" />
                      <TextField id="outlined-basic" label="Email" variant="outlined" />
                      <TextField id="outlined-basic" label="Phone" variant="outlined" />
                      <TextField id="outlined-basic" label="Credit" variant="outlined" />
                      <CreateButton>Add Student</CreateButton>
                    </Stack>
                  </Stack>
              </Stack>
            </Fade>
    </Modal>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}/>
    </Stack>
  )
}

export default StudentList;