import React, { useState, useEffect, useRef } from 'react';
import {useLocation} from 'react-router';
import { AdminNavbar } from '../../components';
import './Grades.css';
import axios from 'axios';

import {
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

import {
    styled,
} from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    fontFamily: 'Lato',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
  };

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
  

const Grades = () => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //modal2
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    //fetch Grade
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [gradeList, setGrade] = useState([]);
    const [info, setInfo] = useState();
    const [prop, setProp] = useState({});

    useEffect(() => {
        const fetchGrade = async() => {
            const res = await axios.get(`https://uni-aa-page.herokuapp.com/transcript/transcriptEmail/${path}`);
            setGrade(res.data.grades);
            setInfo(res.data);
            // console.log(res.data.grades);
        }
        fetchGrade();
    }, []);

    //console.log(Object.values(rows[0]));

    const cName = useRef();
    const credits = useRef();
    const at = useRef();
    const fe = useRef(); 
    const pr = useRef();
    const pa = useRef();
    const qz = useRef();
    const rp = useRef(); 
    const me = useRef();
    const pa2 = useRef();
    const pre = useRef();
    const t10 = useRef();

    const handleUpdate = async() => {
        const newGrade = {
            "course" : cName.current.value,
            "grade" : [
                credits.current.value,
                at.current.value, 
                fe.current.value,
                pr.current.value,
                pa.current.value,
                qz.current.value,
                rp.current.value,
                me.current.value,
                pa2.current.value,
                pre.current.value,
                t10.current.value 
            ].toString()
        }

        const updatedGrade = {
            "student_id" : info.student_id,
            "student_email" : info.student_email,
            "grades" : (info.grades).concat(newGrade)
        }

        try {
            await axios.patch(`https://uni-aa-page.herokuapp.com/transcript/${path}`, updatedGrade);
            if (!alert("Grade Added!")) {window.location.reload();}
        } catch (error) {
            alert(error);
        }
        // console.log(updatedGrade);
    }

    const cols = [
        {field: 'id', headerName: 'No.', width: 50,},
        {field: 'name', headerName: 'Course Name', width: 200},
        {field: 'credits', headerName: 'Credits', width: 100, headerAlign: 'center', align:'center'},
        {field: 'at', headerName: 'AT', width: 100, headerAlign: 'center', align:'center'},
        {field: 'fe', headerName: 'FE', width: 100, headerAlign: 'center', align:'center'},
        {field: 'pr', headerName: 'Pr', width: 100, headerAlign: 'center', align:'center'},
        {field: 'pa', headerName: 'PA', width: 100, headerAlign: 'center', align:'center'},
        {field: 'qz', headerName: 'Qz', width: 100, headerAlign: 'center', align:'center'},
        {field: 'rp', headerName: 'RP', width: 100, headerAlign: 'center', align:'center'},
        {field: 'me', headerName: 'ME', width: 100, headerAlign: 'center', align:'center'},
        {field: 'pa2', headerName: 'PA2', width: 100, headerAlign: 'center', align:'center'},
        {field: 'pre', headerName: 'PRE', width: 100, headerAlign: 'center', align:'center'},
        {field: 't10', headerName: 'T10', width: 100, headerAlign: 'center', align:'center'},
        { 
            field:'action',
            align:'center',
            headerName: 'Action',
            headerAlign: 'center',
            width: 100,
            renderCell: (params) => {
                return(
                <Stack direction="row" spacing={2}>
                    <IconButton 
                    title="Edit Row Data" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setProp(params.row);
                        setModal(true);
                    }}
                    >
                        <EditIcon/>
                    </IconButton>

                    <IconButton
                    sx={{color: 'red'}}
                    title="Delete Row"
                    onClick={async(e)=>{
                        e.preventDefault();
                        var tempArr = info.grades;
                        tempArr.splice(params.row.id-1, 1);
                        // console.log(tempArr);
                        const updatedGrade = {
                            "student_id" : info.student_id,
                            "student_email" : info.student_email,
                            "grades" : tempArr
                        }
                        
                        var ans = window.confirm("Are you sure you want to delete this row?");
                        if (ans) {
                            try {
                                await axios.patch(`https://uni-aa-page.herokuapp.com/transcript/${path}`, updatedGrade);
                                if (!alert("Row Deleted!")) {window.location.reload();}
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        else {alert("Decided not to delete this row!");}
                    }} 
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <Modal
                        open={modal}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 200,
                        }}
                    >
                        <Fade in={modal}>
                            <Stack 
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '30%',
                                bgcolor: 'background.paper',
                                fontFamily: 'Lato',
                                borderRadius:'10px',
                                boxShadow: 24,
                                p: 4,
                            }} 
                            spacing={3} 
                            direction="column"
                            >
                                <h2>Edit Row Information </h2>
                                <Stack direction="row" justifyContent="space-between" spacing={3}>
                                    <TextField label="Course Name" variant="outlined" sx={{width:'100%'}} defaultValue={prop.name} inputRef={cName}/>
                                    <TextField label="Credits" variant="outlined" sx={{width:'100%'}} defaultValue={prop.credits} inputRef={credits}/>
                                </Stack>

                                <Stack direction="row" justifyContent="space-between" spacing={3}>
                                    <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                                        <TextField label="AT" variant="outlined" defaultValue={prop.at} inputRef={at}/>
                                        <TextField label="FE" variant="outlined" defaultValue={prop.fe} inputRef={fe}/>
                                        <TextField label="Pr" variant="outlined" defaultValue={prop.pr} inputRef={pr}/>
                                        <TextField label="PA" variant="outlined" defaultValue={prop.pa} inputRef={pa}/>
                                        <TextField label="Qz" variant="outlined" defaultValue={prop.qz} inputRef={qz}/>
                                    </Stack>

                                    <Stack direction="column" spacing={3} sx={{width:'100%'}}>
                                        <TextField label="RP" variant="outlined" defaultValue={prop.rp} inputRef={rp}/>
                                        <TextField label="ME" variant="outlined" defaultValue={prop.me} inputRef={me}/>
                                        <TextField label="PA2" variant="outlined" defaultValue={prop.pa2} inputRef={pa2}/>
                                        <TextField label="PRE" variant="outlined" defaultValue={prop.pre} inputRef={pre}/>
                                        <TextField label="T10" variant="outlined" defaultValue={prop.t10} inputRef={t10}/>
                                    </Stack>
                                </Stack>
                                <CreateButton sx={{height:'60px'}} 
                                onClick={
                                    async(event)=>{
                                        event.preventDefault();
                                        console.log(prop.id);
                                        const newGrade = {
                                            "course" : cName.current.value,
                                            "grade" : [
                                                credits.current.value,
                                                at.current.value, 
                                                fe.current.value,
                                                pr.current.value,
                                                pa.current.value,
                                                qz.current.value,
                                                rp.current.value,
                                                me.current.value,
                                                pa2.current.value,
                                                pre.current.value,
                                                t10.current.value 
                                            ].toString()
                                        }

                                        var tempArr = info.grades;
                                        tempArr[prop.id-1] = newGrade;
                                        console.log(tempArr);

                                        const updatedGrade = {
                                            "student_id" : info.student_id,
                                            "student_email" : info.student_email,
                                            "grades" : tempArr
                                        }

                                        try {
                                            await axios.patch(`https://uni-aa-page.herokuapp.com/transcript/${path}`, updatedGrade);
                                            if (!alert("Grade Edited!")) {window.location.reload();}
                                        } catch (error) {
                                            alert(error);
                                        }
                                    }
                                }
                                >Update Row</CreateButton>
                            </Stack>
                        </Fade>
                    </Modal>
                </Stack>
                )
            }
        },
    ];

    return (
        <div className="dashboard-main">
            <AdminNavbar/>
            <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <h1>Student's Grade:</h1>
                    <IconButton onClick={handleOpen} sx={{color:'#000248'}} title="Add New Row">
                        <AddCircleIcon fontSize="large"/>
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
                            <h2>Add Transcript Information </h2>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Course Name</b></TableCell>
                                            <TableCell align="center"><b>Credits</b></TableCell>
                                            <TableCell align="center"><b>AT</b></TableCell>
                                            <TableCell align="center"><b>FE</b></TableCell>
                                            <TableCell align="center"><b>Pr</b></TableCell>
                                            <TableCell align="center"><b>PA</b></TableCell>
                                            <TableCell align="center"><b>Qz</b></TableCell>
                                            <TableCell align="center"><b>RP</b></TableCell>
                                            <TableCell align="center"><b>ME</b></TableCell>
                                            <TableCell align="center"><b>PA2</b></TableCell>
                                            <TableCell align="center"><b>PRE</b></TableCell>
                                            <TableCell align="center"><b>T10</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <TextField inputRef={cName}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={credits}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={at}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={fe}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={pr}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={pa}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={qz}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={rp}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={me}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={pa2}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={pre}></TextField>
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField inputRef={t10}></TextField>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <CreateButton sx={{height:'60px'}} onClick={handleUpdate}>Update Transcript</CreateButton>
                        </Stack>
                        </Fade>
                    </Modal>
                </Stack>
                
                <DataGrid
                    columns={cols}
                    sx={{
                        '& .grid-header': {
                            fontWeight: '900px',
                        }
                    }}
                    rows={
                        gradeList.map((v) => {
                            let temp = [v.course].concat(v.grade.split(','))
                            return {
                                id : gradeList.indexOf(v) + 1,
                                name : temp[0], 
                                credits : temp[1], 
                                at : temp[2], 
                                fe : temp[3], 
                                pr : temp[4], 
                                pa : temp[5], 
                                qz : temp[6], 
                                rp : temp[7], 
                                me : temp[8], 
                                pa2 : temp[9], 
                                pre : temp[10], 
                                t10 : temp[11]
                            }
                        })
                    }
                    pageSize={100}
                    rowsPerPageOptions={[5]}
                />
            </Stack>
        </div>
    )
}

export default Grades