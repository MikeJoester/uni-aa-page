import React, { useState, useEffect, useRef } from 'react';
import {PacmanLoader} from "react-spinners";
import {useLocation} from 'react-router';
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

const StudentList = () => {
  //loading screen
  const [loading, setLoading] = useState(false);

  //edit component
  const [prop, setProp] = useState({});

  //modal
  const [openmodal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //axios
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [studentList, setStudentList] = useState([]);

  //fetch students
  useEffect(() => {
    setLoading(true);
    const fetchStudents = async() => {
      const res = await axios.get(`https://uni-aa-page.herokuapp.com/classes/${path}`);
      setStudentList(res.data.students);
      //console.log(res.data.students);
      setLoading(false);
    }
    fetchStudents();
  }, []);

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
  const iNum = useRef();
  const address = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newStudent = {
      "student_id": sid.current.value,
      "full_name": fullname.current.value,
      "birth_date": bday.current.value,
      "birth_place": bPlace.current.value,
      "address" : address.current.value,
      "identity_number" : iNum.current.value,
      "gender": gender,
      "email": mail.current.value,
      "googleID": "",
      "phone": phone.current.value,
      "major": major.current.value,
      "class": sClass.current.value,
      "credit": credits.current.value,
    };

    try {
      const res = await axios.post("https://uni-aa-page.herokuapp.com/students", newStudent);
      // console.log(newStudent);
      if(!alert('New Student Added!')){window.location.reload();}
    } catch (error) {}
  }

  const columns = [ //columns label
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  { field: 'class', headerName: 'Class', width: 150 },
  {
    field: 'dob',
    headerName: 'Date Of Birth',
    type: 'string',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
  },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
  { 
    field:'action',
    headerName: 'Action',
    width: 180,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <IconButton 
          onClick={e=>{
            e.preventDefault();
            console.log(params.row);
            setProp(params.row);
            setOpenModal(true);
          }}
          title="Edit Student's Information"
          >
            <EditIcon/>
          </IconButton>
          <Modal
                open={openmodal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 200,
                }}
            >
                <Fade in={openmodal}>
                  <Stack sx={style} spacing={3} direction="column">
                      <h2>Update Student Information</h2>
                      <Stack direction="row" spacing={4} justifyContent="space-between">
                        <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                          <TextField label="Student ID" variant="outlined" inputRef={sid} defaultValue={prop.id}/>
                          <TextField label="Full Name" variant="outlined" inputRef={fullname} defaultValue={prop.fullName}/>
                          <TextField label="Birth Date" variant="outlined" inputRef={bday} defaultValue={prop.dob}/>
                          <TextField label="Birth Place" variant="outlined" inputRef={bPlace} defaultValue={prop.birthplace}/>
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
                          <TextField label="Major" variant="outlined" inputRef={major} defaultValue={prop.major}/>
                        </Stack>

                        <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                          <TextField label="Class" variant="outlined" inputRef={sClass} defaultValue={prop.class}/>
                          <TextField label="Email" variant="outlined" inputRef={mail} defaultValue={prop.email}/>
                          <TextField label="Phone" variant="outlined" inputRef={phone} defaultValue={prop.phone}/>
                          <TextField label="Address" variant="outlined" inputRef={address} defaultValue={prop.address}/>
                          <TextField label="Identity Number" variant="outlined" inputRef={iNum} defaultValue={prop.inum}/>
                          <TextField label="Credit" variant="outlined" inputRef={credits} defaultValue={prop.credit}/>
                        </Stack>
                      </Stack>
                      <CreateButton sx={{height:'60px'}} onClick={async(e) => {
                        e.preventDefault();
                        const updatedStudent = {
                          "student_id": sid.current.value,
                          "full_name": fullname.current.value,
                          "birth_date": bday.current.value,
                          "birth_place": bPlace.current.value,
                          "address" : address.current.value,
                          "identity_number" : iNum.current.value,
                          "gender": gender,
                          "email": mail.current.value,
                          "googleID": "",
                          "phone": phone.current.value,
                          "major": major.current.value,
                          "class": sClass.current.value,
                          "credit": credits.current.value,
                        };

                        try {
                          await axios.patch(`https://uni-aa-page.herokuapp.com/students/${prop.trueId}`, updatedStudent);
                          if (!alert("Update Success!")) {window.location.reload();}
                          // console.log(updatedStudent);
                        } catch (error) {
                          alert(error);
                        }
                      }}>Update Information</CreateButton>
                  </Stack>
                </Fade>
          </Modal>

          <Link to={"/grades/"+params.row.email}>
            <IconButton title="Show Student's Grades">
              <GradingIcon/>
            </IconButton>          
          </Link>
          <IconButton sx={{color: 'red'}} 
          title="Delete Student's Information"
          onClick={async(e) =>{
            e.preventDefault();
            let confirm = window.confirm('Are you sure you want to delete this element?');
            if (confirm) {
              try {
                await axios.delete(`https://uni-aa-page.herokuapp.com/students/${params.row.trueId}`);
                if (!alert("Student Terminated")) {window.location.reload();} 
              } catch (error) {
                alert(error);
              }
            }
            else {
              alert('Decided not to terminate the student :)');
            }
          }}>
            <DeleteIcon/>
          </IconButton>
        </Stack>
      )
    }
  },
  ];

  return (
    <div className="dashboard-main-view">
      {
        loading ? 
        <Stack sx={{height: '51vw', mt:'20%', ml:'30%'}} direction="column" spacing={5}>
          <h1>Loading...</h1>
          <PacmanLoader
          size={150}
          color={"#000248"}
          loading={loading}
          />
        </Stack>
        : 
        <Stack direction="column" spacing={4} sx={{mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
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
                          <TextField id="outlined-basic" label="Address" variant="outlined" inputRef={address}/>
                          <TextField id="outlined-basic" label="Identity Number" variant="outlined" inputRef={iNum}/>
                          <TextField id="outlined-basic" label="Credit" variant="outlined" inputRef={credits}/>
                        </Stack>
                      </Stack>
                      <CreateButton onClick={handleSubmit} sx={{height:'60px'}}>Add Student</CreateButton>
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
                  class: val.class,
                  dob: val.birth_date,
                  email: val.email,
                  phone: val.phone,
                  //hidden information down
                  trueId : val._id,
                  major : val.major,
                  credit : val.credit,
                  address : val.address,
                  inum : val.identity_number,
                  gender : val.gender,
                  birthplace : val.birth_place
                }
              })
            }
            columns={columns}
            pageSize={40}
            rowsPerPageOptions={[5]}/>
        </Stack>
      }
    </div>
  )
}

export default StudentList;