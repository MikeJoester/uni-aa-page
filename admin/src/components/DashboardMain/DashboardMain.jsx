import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import {
    Stack,
    TextField,
    IconButton, 
    Divider,
    InputAdornment,
    Button,
} from '@mui/material';

import {
    styled, 
} from '@mui/material/styles';

import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

import './DashboardMain.css';

const SearchTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A098AE',
        backgroundColor: '#fff',
    },
    '& label': {
        color: '#c0c0c0',
        fontSize: '20px',
        fontWeight: '500',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#c0c0c0',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '40px',
        backgroundColor: '#fff',
        height: '60px',

        '& fieldset': {
            borderColor: '#000248',
        },
        '&:hover fieldset': {
            borderColor: '#c0c0c0',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#c0c0c0',
        },
    },
});

const ViewMoreBtn = styled(Button)({
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    color:'#000248',
    width:'80%',
    backgroundColor: '#fff',
    borderColor: '#2b2d7d',
    '&:hover': {
      backgroundColor: '#2b2d7d',
      borderColor: '#2b2d7d',
      boxShadow: 'none',
      color:'#fff',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2b2d7d',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const DashboardMain = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const navigateStudents = () => {
        navigate('/students');
    }

    useEffect(() => {
        const fetchClasses = async() => {
            const res = await axios.get("http://localhost:5000/classlist/");
            setStudents(res.data);
            console.log(res.data);
        }
        fetchClasses();
    }, []);

  return (
    <Stack direction="column" spacing={5} sx={{mx:'40px', my:'50px', width:'100%', color:'#000248'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <h1>Dashboard</h1>
            <Stack direction="row" justifyContent="space-around" spacing={2} alignItems="center" >
                <Stack direction="column" alignItems="flex-end" >
                    <h3>Nguyen Van A</h3>
                    <p>Admin</p>
                </Stack>
                <div className="icon-circle-container"></div>
            </Stack>
        </Stack>

        <Stack direction="row" sx={{borderRadius:'20px', backgroundColor:'white', pb:'40px', pt:'30px'}} spacing={3} justifyContent='space-around'>
            <Stack direction="row" spacing={2} alignItems="flex-end">
                <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <GroupIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Students</p>
                    <h1>{students.length}</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-end">
                <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <MenuBookIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Courses</p>
                    <h1>69</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-end">
                <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <CalendarMonthIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Posts</p>
                    <h1>96</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="flex-end">
                <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <ForumIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Feedbacks</p>
                    <h1>6969</h1>
                </Stack>
            </Stack>
        </Stack>

        <Stack direction="row" spacing={5} justifyContent="space-between">
            <Stack direction="column" spacing={3} sx={{width:'100%', backgroundColor:'white', borderRadius:'20px', p:'30px'}} alignItems="center">
                <h1>New Students</h1>
                <SearchTextField sx={{width:'100%'}}
                placeholder="Search here..."
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                  }}/>
                
                {students.slice(0, 5).map((p) => {return(
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={4} alignItems="center">
                            <div className="icon-circle-container"></div>
                            <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                                <h3>{p.full_name}</h3>
                                <p>Class: <b>{p.class.class_name}</b></p>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <IconButton sx={{color:'#000248'}}>
                                <InfoIcon fontSize="large"/>
                            </IconButton>
    
                            <IconButton sx={{color:'#000248'}}>
                                <EmailIcon fontSize="large"/>
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Divider/>
                </Stack>
                )})}
                <ViewMoreBtn onClick={navigateStudents}>View More</ViewMoreBtn>
            </Stack>

            <Stack direction="column" spacing={3} sx={{width:'100%', backgroundColor:'white', borderRadius:'20px', p:'30px'}} alignItems="center">
                <h1>Feedbacks</h1>
                <SearchTextField sx={{width:'100%'}}
                placeholder="Search here..."
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                  }}/>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px', width:'90%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4} alignItems="center">
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Never gonna give you up, never gonna let you down...</p>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <p>11:30 A.M</p>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px', width:'90%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4} alignItems="center">
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Never gonna give you up, never gonna let you down...</p>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <p>11:30 A.M</p>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px', width:'90%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4} alignItems="center">
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Never gonna give you up, never gonna let you down...</p>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <p>11:30 A.M</p>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px', width:'90%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4} alignItems="center">
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Never gonna give you up, never gonna let you down...</p>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <p>11:30 A.M</p>
                    </Stack>
                  </Stack>
                </Stack>  
                <ViewMoreBtn>View More</ViewMoreBtn>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default DashboardMain