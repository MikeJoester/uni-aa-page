import React, { useState, useEffect, useRef } from 'react';
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
  InputLabel,
  MenuItem,
  Select,
  FormControl,
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
  width: '35%',
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
      setStudentList(res.data);
    }
    fetchStudents();
  }, [studentList]);

  //New Student
  const [gender, setGender] = useState(true);
  const fullname = useRef();
  const sid = useRef();
  const bday = useRef();
  const bPlace = useRef();
  const mail = useRef();
  const phone = useRef();
  const major = useRef();
  const sClass = useRef();
  const credits = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newStudent = {
      "student_id": sid.current.value,
      "full_name": fullname.current.value,
      "birth_date": bday.current.value,
      "birth_place": bPlace.current.value,
      "gender": gender,
      "email": mail.current.value,
      "googleID": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      "phone": phone.current.value,
      "major": major.current.value,
      "class": sClass.current.value,
      "credit": credits.current.value,
    };

    try {
      const res = await axios.post("http://localhost:5000/students", newStudent);
      if(!alert('New Student Added!')){window.location.reload();}
    } catch (error) {}
  }

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
                  <Stack direction="row" spacing={4} justifyContent="space-between">
                    <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                      <TextField id="outlined-basic" label="Student ID" variant="outlined" inputRef={sid}/>
                      <TextField id="outlined-basic" label="Full Name" variant="outlined" inputRef={fullname}/>
                      <TextField id="outlined-basic" label="Birth Date" variant="outlined" inputRef={bday}/>
                      <TextField id="outlined-basic" label="Birth Place" variant="outlined" inputRef={bPlace}/>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={gender}
                          label="Gender"
                          onChange={e => setGender(e.target.value)}
                        >
                          <MenuItem value={true}>Male</MenuItem>
                          <MenuItem value={false}>Female</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField id="outlined-basic" label="Major" variant="outlined" inputRef={major}/>
                    </Stack>

                    <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                      <TextField id="outlined-basic" label="Class" variant="outlined" inputRef={sClass}/>
                      <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={mail}/>
                      <TextField id="outlined-basic" label="Phone" variant="outlined" inputRef={phone}/>
                      <TextField id="outlined-basic" label="Credit" variant="outlined" inputRef={credits}/>
                      <CreateButton onClick={handleSubmit} sx={{height:'60px'}}>Add Student</CreateButton>
                    </Stack>
                  </Stack>
              </Stack>
            </Fade>
    </Modal>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={
          studentList.map((val) => {
            return {
              id: val.student_id,
              fullName: val.full_name,
              class: val.class.class_name,
              dob: new Date(val.birth_date).toDateString(),
              email: val.email
            }
          })
        }
        columns={columns}
        pageSize={40}
        rowsPerPageOptions={[5]}/>
    </Stack>
  )
}

export default StudentList;