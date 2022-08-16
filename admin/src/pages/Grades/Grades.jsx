import React, { useState, useEffect } from 'react';
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

import {
    styled,
} from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    backgroundColor: '#000248',
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'Capitalize',
    '&:hover': {
        backgroundColor: '#5b4d82',
      },
}));

function createData(courseName, credits, AT, FE, Pr, PA, Qz, RP, ME, PA2, PRE, T10) {
    return { courseName, credits, AT, FE, Pr, PA, Qz, RP, ME, PA2, PRE, T10 };
}
  
// const rows = [
//     createData('Frozen yoghurt', 3, 10, 10, 10, 10, null, null, null, null, null, null),
// ];

const Grades = () => {
    //modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //fetch Grade
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [gradeList, setGrade] = useState([]);

    useEffect(() => {
        const fetchGrade = async() => {
            const res = await axios.get(`https://uni-aa-page.herokuapp.com/transcript/transcriptEmail/${path}`);
            setGrade(res.data.grades);
        }
        fetchGrade();
    }, []);

    const rows = gradeList.map((v) => {
        let temp = [v.course].concat(v.grade.split(','))
        return createData(...temp)
    });

    const handleUpdate = async() => {
        const updatedGrade = {

        }

        try {
            await axios.patch(`https://uni-aa-page.herokuapp.com/transcript/${path}`, updatedGrade);
        } catch (error) {
            alert(error);
        }
    }

  return (
    <div className="dashboard-main">
        <AdminNavbar/>
        <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248', height:'50vw'}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <h1>Student's Grade:</h1>
                <Stack direction="row" spacing={2}>
                    <IconButton sx={{color:'#000248'}} title="Edit Student's Grade">
                        <EditIcon fontSize="large"/>
                    </IconButton>

                    <IconButton onClick={handleOpen} sx={{color:'#000248'}} title="Add New Row">
                        <AddCircleIcon fontSize="large"/>
                    </IconButton>
                </Stack>
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
                        <h2>Edit Transcript Information </h2>
                        <CreateButton sx={{height:'60px'}}>Update Transcript</CreateButton>
                    </Stack>
                    </Fade>
                </Modal>
            </Stack>
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
                            <TableCell align="center"><b>Grading</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.courseName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.courseName}</TableCell>
                                <TableCell align="center">{row.credits}</TableCell>
                                <TableCell align="center">{row.AT==="null" ? '' : row.AT}</TableCell>
                                <TableCell align="center">{row.FE==="null"? '' : row.FE}</TableCell>
                                <TableCell align="center">{row.Pr==="null"? '' : row.Pr}</TableCell>
                                <TableCell align="center">{row.PA==="null"? '' : row.PA}</TableCell>
                                <TableCell align="center">{row.Qz==="null"? '' : row.Qz}</TableCell>
                                <TableCell align="center">{row.RP==="null"? '' : row.RP}</TableCell>
                                <TableCell align="center">{row.ME==="null"? '' : row.ME}</TableCell>
                                <TableCell align="center">{row.PA2==="null"? '' : row.PA2}</TableCell>
                                <TableCell align="center">{row.PRE==="null"? '' : row.PRE}</TableCell>
                                <TableCell align="center">{row.T10==="null"? '' : row.T10}</TableCell>
                                <TableCell align="center">A+</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    </div>
  )
}

export default Grades