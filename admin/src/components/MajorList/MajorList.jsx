import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {PacmanLoader} from "react-spinners";
import axios from 'axios';
import './MajorList.css';

import {
    Stack,
    Box,
    Button,
    Modal,
    Backdrop,
    Fade,
    TextField,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

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
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ViewMoreButton = styled(Button)({
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    color:'#fff',
    width:'100%',
    backgroundColor: '#2b2d7d',
    borderColor: '#2b2d7d',
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#2b2d7d',
      boxShadow: 'none',
      color:'#2b2d7d',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const columns = [ //columns label
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Class Name', width: 150 },
  { field: 'total', headerName: 'Total Students', width: 150 },
  { 
    field:'action',
    align:'center',
    
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Link to={"/class/"+params.row.id}>
            <ViewMoreButton>
                Details
            </ViewMoreButton>
          </Link>
        </Stack>
      )
    }
  },
];

const MajorList = () => {

    //loading screen
    const [loading, setLoading] = useState(false);

    //fetchMajors
    const [majors, setMajors] = useState([]);
    const [open, setOpen] = useState(false);
    const [classList, setClassList] = useState([]);

    //Modal Manager
    const [openmodal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    useEffect(() => {
        setLoading(true);
        const fetchMajors = async() => {
          const res = await axios.get("https://uni-aa-page.herokuapp.com/majors/");
          setMajors(res.data);
          setLoading(false);
        }
        fetchMajors();
    }, []);

    const className = useRef();
    const classMajor = useRef();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newClass = {
            "class_name" : className.current.value,
            "major" : classMajor.current.value,
        }
        // console.log(newClass);
        try {
            const res = await axios.post("https://uni-aa-page.herokuapp.com/classes", newClass);
            if(!alert('New Class Added!')){window.location.reload();}
        } catch (error) {
            alert(error)
        }
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
                <Stack sx={{ my:'60px', width:'100%'}} direction="row" justifyContent="space-between" spacing={3}>
                    <Stack direction="column" justifyContent="space-between" spacing={5} sx={{width:'50%'}}>
                        <Stack direction="row" justifyContent="space-between" sx={{width:'100%'}} alignItems="center">
                            <h1>Browse Majors in VNUK</h1>
                            <ViewMoreButton sx={{width:'30%', height:'70%'}} onClick={handleOpen}>Add Class</ViewMoreButton>
                            <Modal
                                open={openmodal}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={openmodal}>
                                <Stack sx={style} spacing={3} direction="column">
                                    <h1>Add New Class The Database</h1>
                                    <Stack direction="column" spacing={4}>
                                        <TextField id="outlined-basic" label="Class Name" variant="outlined" inputRef={className}/>
                                        <TextField id="outlined-basic" label="Major" variant="outlined"
                                        inputRef={classMajor}/>
                                        <ViewMoreButton onClick={handleSubmit}>Add Post</ViewMoreButton>
                                    </Stack>
                                </Stack>
                                </Fade>
                            </Modal>
                        </Stack>
                        <Stack justifyContent="space-between" spacing={5}>
                            {majors.map((val) => {
                                return(
                                    <Box sx={{backgroundColor:'#d9d9d9', borderRadius:'10px', p:'20px'}}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Stack direction="column" spacing={3} sx={{width:'60%'}}>
                                                <h2>{val.major_name}</h2>
                                                <p>Major Code: <b>{val.major_code}</b></p>
                                                <p>Total Class: {val.classes.length}</p>
                                            </Stack>
                                            <Stack direction="column" justifyContent="space-around">
                                                <ViewMoreButton 
                                                onClick={async(e) => {
                                                    e.preventDefault();
                                                    setOpen(true);
                                                    try {
                                                        const res = await axios.get(`https://uni-aa-page.herokuapp.com/majors/${val._id}`);
                                                        setClassList(res.data.classes);
                                                    } catch (error) {
                                                        console.log(error);
                                                    }
                                                }}>View More</ViewMoreButton>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Stack>
                    {open && 
                        <Stack sx={{width:'47%'}} spacing={5}>
                            <h1>Classes List</h1>
                            <DataGrid
                            sx={{fontSize:'17px', width:'100%'}}
                            rows={classList.map((val)=>{
                                return {
                                    id : val._id,
                                    name : val.class_name,
                                    total : val.students.length
                                }
                            })}
                            // rows={[]}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[5]}
                            editMode="cell"/>
                        </Stack>
                    }
                </Stack>
            }
        </div>
    )
}

export default MajorList