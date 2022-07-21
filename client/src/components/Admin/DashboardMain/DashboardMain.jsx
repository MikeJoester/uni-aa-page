import React from 'react';

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

const DashboardMain = () => {
  return (
    <Stack direction="column" spacing={5} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248'}}>
        <Stack direction="row" justifyContent="space-between">
            <h2>Dashboard</h2>
            <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="center" >
                <Stack direction="column" alignItems="flex-end">
                    <h5>Nguyen Van A</h5>
                    <p>Admin</p>
                </Stack>
                <div className="icon-circle-container"></div>
            </Stack>
        </Stack>

        <Stack direction="row" sx={{borderRadius:'20px', backgroundColor:'white', py:'40px'}} spacing={3} justifyContent='space-around'>
            <Stack direction="row" spacing={2} alignItems="center">
                <Stack sx={{width:'72px', backgroundColor:'#2B2D7D', height:'72px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <GroupIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Students</p>
                    <h1>696</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <Stack sx={{width:'72px', backgroundColor:'#2B2D7D', height:'72px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <MenuBookIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Courses</p>
                    <h1>69</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <Stack sx={{width:'72px', backgroundColor:'#2B2D7D', height:'72px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <CalendarMonthIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Posts</p>
                    <h1>96</h1>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
                <Stack sx={{width:'72px', backgroundColor:'#2B2D7D', height:'72px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                    <ForumIcon fontSize="large"/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <p>Feedbacks</p>
                    <h1>6969</h1>
                </Stack>
            </Stack>
        </Stack>

        <Stack direction="row" spacing={5} justifyContent="space-between">
            <Stack direction="column" spacing={3} sx={{width:'100%', backgroundColor:'white', borderRadius:'20px', p:'30px'}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="column" spacing={1} alignItems="flex-start">
                        <h3>New Students</h3>
                        <p>There are <b>696</b> students in VNUK</p>
                    </Stack>
                </Stack>
                <SearchTextField
                placeholder="Search here..."
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                  }}/>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Class: <b>22CSE</b></p>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Class: <b>22CSE</b></p>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Class: <b>22CSE</b></p>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Class: <b>22CSE</b></p>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                        <div className="icon-circle-container"></div>
                        <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                            <h3>Sussus Amogus</h3>
                            <p>Class: <b>22CSE</b></p>
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
                <Button>View More</Button>
            </Stack>

            <Stack direction="column" spacing={4} sx={{width:'100%', p:'30px', backgroundColor:'white', borderRadius:'20px'}}>
                <h3>Feedbacks</h3>
                <SearchTextField
                placeholder="Search here..."
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                  }}/>
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%', borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%', borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%', borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
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
                <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%', borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px'}}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
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
            </Stack>
        </Stack>
    </Stack>
  )
}

export default DashboardMain