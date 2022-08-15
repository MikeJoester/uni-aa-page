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
  InputLabel,
  MenuItem,
  Select,
  FormControl,
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
  { field: 'id', headerName: 'Course Code', width: 150 },
  { field: 'name', headerName: 'Name', width: 290 },
  { field: 'credits', headerName: 'Credits', width: 150 },
  {
    field: 'semester',
    headerName: 'Semester',
    type: 'string',
    width: 230,
  },
  {
    field: 'optional',
    headerName: 'Optional',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 150,
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

const CourseList = () => {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async() => {
      const res = await axios.get("https://uni-aa-page.herokuapp.com/courses/");
      setCourses(res.data);
      console.log(res.data)
    }
    fetchCourses();
  }, []);

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Post New Course
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [credits, setCredits] = useState(0);
  const [semester, setSemester] = useState("");
  const [option, setOption] = useState(true);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newCourse = {
      "course_code" : code,
      "course_name" : name,
      "credit" : credits,
      "optional" : option,
      "semester" : semester,
    }

    try {
      const res = await axios.post('http://localhost:5000/courses/', newCourse);
      if(!alert('Course Added!')){window.location.reload();}
    } catch (error) {}
  }

  return (
    <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1>View Courses</h1>
        <CreateButton onClick={handleOpen}>Add Course</CreateButton>
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
                  <h1>Add New Course to Database</h1>
                  <Stack direction="column" spacing={4}>
                    <TextField id="outlined-basic" label="Course Code" variant="outlined"
                    onChange={e => setCode(e.target.value)}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                    onChange={e => setName(e.target.value)}/>
                    <Stack direction="row" justifyContent="space-between" spacing={3}>
                      <FormControl sx={{width:'100%'}}>
                          <InputLabel id="demo-simple-select-label">Optional</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            label="Gender"
                            onChange={e => setOption(e.target.value)}
                          >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                          </Select>
                      </FormControl>
                      <TextField id="outlined-basic" label="Credits" variant="outlined"
                      onChange={e => setCredits(e.target.value)} sx={{width:'100%'}}/>
                    </Stack>
                    <TextField id="outlined-basic" label="Semester" variant="outlined"
                    onChange={e => setSemester(e.target.value)}/>
                    <CreateButton onClick={handleSubmit}>Add Course</CreateButton>
                  </Stack>
              </Stack>
            </Fade>
        </Modal>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={courses.map((val) => {
          return {
            id: val.course_code,
            name: val.course_name,
            credits: val.credit,
            semester: val.semester,
            optional: val.optional
          }
        })} 
        columns={columns} 
        pagesize={10} 
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection/>
    </Stack>
  )
}

export default CourseList;