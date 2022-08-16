import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import images from '../../constants/images';
import {PacmanLoader} from "react-spinners";

import {
    Stack,
    IconButton, 
    Divider,
    Button,
    Modal,
    Backdrop,
    Fade,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
} from '@mui/material';

import {
    styled, 
} from '@mui/material/styles';

import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ForumIcon from '@mui/icons-material/Forum';
import InfoIcon from '@mui/icons-material/Info';

import './DashboardMain.css';

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

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //fetching constants
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [posts, setPosts] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [info, setInfo] = useState({});

    const navigateStudents = () => {
        navigate('/majors');
    }
    const navigateFBs = () => {
        navigate('/feedbacks');
    }

    //loading screen
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchClasses = async() => {
            const res = await axios.get("https://uni-aa-page.herokuapp.com/students/");
            const courses = await axios.get("https://uni-aa-page.herokuapp.com/courses/");
            const res2 = await axios.get("https://uni-aa-page.herokuapp.com/blogs/");
            const feedback = await axios.get("https://uni-aa-page.herokuapp.com/surveys");
            setStudents(res.data);
            setCourses(courses.data);
            setPosts(res2.data);
            setFeedbacks(feedback.data);
            // console.log(post.data);
            setLoading(false);
        }
        fetchClasses();
    }, []);

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
            <Stack direction="column" spacing={5} sx={{my:'50px', width:'100%', color:'#000248'}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <h1>Dashboard</h1>
                    <Stack direction="row" justifyContent="space-around" spacing={2} alignItems="center" >
                        <Stack direction="column" alignItems="flex-end" >
                            <Link to="/settings"><h3>Nguyen Van Liem</h3></Link>
                            <p>Admin</p>
                        </Stack>
                        <Link to="/settings"><img className="icon-circle-container" src={images.avatar1}/></Link>
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
                            <h1>{courses.length}</h1>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="flex-end">
                        <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                            <CalendarMonthIcon fontSize="large"/>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <p>Posts</p>
                            <h1>{posts.length}</h1>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="flex-end">
                        <Stack sx={{width:'80px', backgroundColor:'#2B2D7D', height:'80px', borderRadius:'40px', color:'#FFFFFF'}} alignItems="center" justifyContent='center'>
                            <ForumIcon fontSize="large"/>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <p>Feedbacks</p>
                            <h1>{feedbacks.length}</h1>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={5} justifyContent="space-between">
                    <Stack direction="column" spacing={3} sx={{width:'100%', backgroundColor:'white', borderRadius:'20px', p:'30px'}} alignItems="center">
                        <h1>New Students</h1>
                        
                        {students.slice(0, 5).map((p) => {return(
                        <Stack direction="column" spacing={2} justifyContent="space-between" sx={{width:'100%'}}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <img className="icon-circle-container" src={images.avatar1}/>
                                    <Stack justifyContent="space-between" alignItems="flex-start" direction="column">
                                        <h3>{p.full_name}</h3>
                                        <p>Major: <b>{p.major}</b></p>
                                    </Stack>
                                </Stack>
                                <IconButton 
                                title="Display Student's Information"
                                sx={{color:'#000248'}} 
                                onClick={() => {
                                    setOpen(true);
                                    setInfo(p);
                                }}>
                                    <InfoIcon fontSize="large"/>
                                </IconButton>
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
                                        <h2>View {info.full_name}'s Information</h2>
                                        <Stack direction="row" spacing={4} justifyContent="space-between">
                                            <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                                                <TextField id="outlined-basic" label="Student ID" variant="outlined" value={info.student_id}/>
                                                <TextField id="outlined-basic" label="Full Name" variant="outlined" value={info.full_name}/>
                                                <TextField id="outlined-basic" label="Birth Date" variant="outlined" value={info.birth_date}/>
                                                <TextField id="outlined-basic" label="Birth Place" variant="outlined" value={info.birth_place}/>
                                                <TextField id="outlined-basic" label="Gender" variant="outlined" value={info.gender ? "Male" : "Female"}/>
                                                <TextField id="outlined-basic" label="Major" variant="outlined" value={info.major}/>
                                            </Stack>

                                            <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                                                <TextField id="outlined-basic" label="Class" variant="outlined" value={info.class}/>
                                                <TextField id="outlined-basic" label="Email" variant="outlined" value={info.email}/>
                                                <TextField id="outlined-basic" label="Phone" variant="outlined" value={info.phone}/>
                                                <TextField id="outlined-basic" label="Address" variant="outlined" value={info.address}/>
                                                <TextField id="outlined-basic" label="Identity Number" variant="outlined" value={info.identity_number}/>
                                                <TextField id="outlined-basic" label="Credit" variant="outlined" value={info.credit}/>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    </Fade>
                                </Modal>
                            </Stack>
                            <Divider/>
                        </Stack>
                        )})}
                        <ViewMoreBtn onClick={navigateStudents}>View More</ViewMoreBtn>
                    </Stack>

                    <Stack direction="column" spacing={3} sx={{width:'100%', backgroundColor:'white', borderRadius:'20px', p:'30px'}} alignItems="center">
                        <h1>Feedbacks</h1>
                        {feedbacks.slice(0, 5).map((val)=>{
                            return(
                                <Stack direction="column" justifyContent="space-between" sx={{borderRadius:'20px', backgroundColor:'#F1F1F5', p:'20px', width:'90%'}}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Stack direction="row" spacing={4} alignItems="center">
                                            <img className="icon-circle-container" src={images.avatar1}/>
                                            <Stack justifyContent="space-between" alignItems="flex-start" direction="column" sx={{width:'100%'}}>
                                                <Stack direction="row" alignItems="center">
                                                    <p>Course Name: </p>
                                                    <h4>{val.course_name}</h4>
                                                </Stack>
                                                <p>Lecturer: {val.lecturer_name}</p>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="column" justifyContent="space-between" alignItems="flex-end">
                                            <p>Post Date: {val.createdAt.split('T')[0]}</p>
                                            <h4>Deadline: {val.deadline}</h4>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            )
                        })}
                        <ViewMoreBtn onClick={navigateFBs}>View More</ViewMoreBtn>
                    </Stack>
                </Stack>
            </Stack>
        }
    </div>
  )
}

export default DashboardMain