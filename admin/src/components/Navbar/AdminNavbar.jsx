import React from 'react';
import images from '../../constants/images';
import {
    List,
    Stack,
    ListItemButton,
    ListItemIcon,
    ListItemText,    
} from '@mui/material';

import { useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';

import './AdminNavbar.css';

const AdminNavbar = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    const navigateBlogs = () => {
        navigate('/blogs');
    }

    const navigateStudents = () => {
        navigate('/students');
    }

    const navigateSettings = () => {
        navigate('/settings');
    }

    const navigateCourses = () => {
        navigate('/courses');
    }

    const navigateFeedbacks = () => {
        navigate('/feedbacks');
    }

  return (
    <List
        sx={{width: '100%', maxWidth: 345, bgcolor:'#000248', height:'80vw', pt:'45px'}}
    >
        <Stack spacing={2} direction="column" sx={{my:'20px', pl:'45px', position:'fixed'}}>
            <a href="https://vnuk.edu.vn/" target="_blank" rel="noreferrer"><img src={images.vnuk_white} className="dashboard-vnuk-white" alt="vnuk-logo"/></a>
            <ListItemButton 
            onClick={navigateHome}>
                    <ListItemIcon sx={{color:'white'}}> 
                        <HomeIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" 
                    primaryTypographyProps={{
                            color: 'white',
                            fontWeight: 'medium',
                            variant: 'h6',
                    }}/>
            </ListItemButton>

            <ListItemButton onClick={navigateStudents}>
                <ListItemIcon sx={{color:'white'}}>
                    <GroupIcon fontSize="large"/>
                </ListItemIcon>
                <ListItemText primary="Students" primaryTypographyProps={{
                        color: 'white',
                        fontWeight: 'medium',
                        variant: 'h6',
                }}/>
            </ListItemButton>

            <ListItemButton onClick={navigateCourses}>
                <ListItemIcon sx={{color:'white'}}>  
                    <MenuBookIcon fontSize="large"/>
                </ListItemIcon>
                <ListItemText primary="Courses" primaryTypographyProps={{
                        color: 'white',
                        fontWeight: 'medium',
                        variant: 'h6',
                }}/>
            </ListItemButton>

            <ListItemButton onClick={navigateBlogs}>   
                    <ListItemIcon sx={{color:'white'}}>  
                        <CalendarMonthIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText primary="Posts" primaryTypographyProps={{
                            color: 'white',
                            fontWeight: 'medium',
                            variant: 'h6',
                    }}/>
            </ListItemButton>

            <ListItemButton onClick={navigateFeedbacks}>
                <ListItemIcon sx={{color:'white'}}>  
                    <ForumIcon fontSize="large"/>
                </ListItemIcon>
                <ListItemText primary="Feedbacks" primaryTypographyProps={{
                        color: 'white',
                        fontWeight: 'medium',
                        variant: 'h6',
                }}/>
            </ListItemButton>

            <ListItemButton onClick={navigateSettings}>
                <ListItemIcon sx={{color:'white'}}>  
                    <SettingsIcon fontSize="large"/>
                </ListItemIcon>
                <ListItemText primary="Settings" primaryTypographyProps={{
                        color: 'white',
                        fontWeight: 'medium',
                        variant: 'h6',
                }}/>
            </ListItemButton>
        </Stack>
    </List>
  )
}

export default AdminNavbar;