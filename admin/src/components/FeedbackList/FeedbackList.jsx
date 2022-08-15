import React, { useState, useEffect, useRef } from 'react';
import {PacmanLoader} from "react-spinners";
import {Link} from 'react-router-dom';
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
import InfoIcon from '@mui/icons-material/Info';

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
  { field: 'name', headerName: 'Course Name', width: 290 },
  { field: 'lecturer', headerName: 'Lecturer Name', width: 290 },
  {
    field: 'date',
    headerName: 'Post Date',
    type: 'string',
    width: 250,
  },
  {
    field: 'deadline',
    headerName: 'Deadline',
    width: 250,
  },
  { 
    field:'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <IconButton>
            <EditIcon/>
          </IconButton>
          <a href={params.row.link} target="_blank">
            <IconButton>
              <InfoIcon/>
            </IconButton>
          </a>
          <IconButton sx={{color: 'red'}} onClick={async(e) =>{
            e.preventDefault();
            let confirm = window.confirm('Are you sure you want to delete this element?');
            if (confirm) {
              try {
                await axios.delete(`https://uni-aa-page.herokuapp.com/surveys/${params.row.id}`);
                if (!alert("Survey Terminated")) {window.location.reload();} 
              } catch (error) {
                alert(error);
              }
            }
            else {
              alert('Decided not to terminate the survey :)');
            }
          }}>
            <DeleteIcon/>
          </IconButton>
        </Stack>
      )
    }
  },
];

const FeedbackList = () => {
  //loading screen
  const [loading, setLoading] = useState(false);

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchFbs = async() => {
      const res = await axios.get("https://uni-aa-page.herokuapp.com/surveys/");
      setFeedbacks(res.data);
      setLoading(false);
    }
    fetchFbs();
  }, []);

  const link = useRef();
  const name = useRef();
  const lecturer= useRef();
  const dline = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newForm = {
      "form_link" : link.current.value,
      "course_name" : name.current.value,
      "lecturer_name" : lecturer.current.value,
      "deadline" : dline.current.value,
    };

    try {
      const res = await axios.post("https://uni-aa-page.herokuapp.com/surveys", newForm);
      console.log(newForm);
      if(!alert('New Form Added!')){window.location.reload();}
    } catch (error) {}
  }

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
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <h1>View Feedbacks from students / clients</h1>
            <CreateButton onClick={handleOpen}>Add Survey/Form</CreateButton>
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
                      <h2>Add New Survey / Form</h2>
                      <TextField id="outlined-basic" label="Form Link" variant="outlined" inputRef={link}/>
                      <TextField id="outlined-basic" label="Course Name" variant="outlined"inputRef={name}/>
                      <TextField id="outlined-basic" label="Lecturer Name" variant="outlined"inputRef={lecturer}/>
                      <TextField id="outlined-basic" label="Deadline" variant="outlined"inputRef={dline}/>
                      <CreateButton onClick={handleSubmit} sx={{height:'60px'}}>Create Form / Survey</CreateButton>
                  </Stack>
                </Fade>
              </Modal>
          </Stack>
          <DataGrid
            sx={{fontSize:'17px'}}
            rows={feedbacks.map((val) => {
              return {
                id: val._id,
                name: val.course_name,
                lecturer: val.lecturer_name,
                date: val.createdAt.split('T')[0],
                deadline: val.deadline,
                link: val.form_link
              }
            })} 
            columns={columns} 
            pagesize={10} 
            pageSize={10}
            rowsPerPageOptions={[5]}/>
        </Stack>
      }
    </div>
  )
}

export default FeedbackList;