import React, { useState, useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './MajorList.css';

import {
    Stack,
    Box,
    Button,
    IconButton,
    ClickAwayListener,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

import {
    styled, 
} from '@mui/material/styles';

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
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Class Name', width: 200 },
  { field: 'total', headerName: 'Total Students', width: 150 },
  { 
    field:'action',
    headerName: 'Action',
    width: 180,
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

    const [majors, setMajors] = useState([]);
    const [open, setOpen] = useState(false);
    const [classList, setClassList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMajors = async() => {
          const res = await axios.get("https://uni-aa-page.herokuapp.com/majors/");
          setMajors(res.data);
        }
        fetchMajors();
    }, [majors]);

    return (
        <Stack sx={{ mx:'40px', my:'60px', width:'100%'}} direction="row" justifyContent="space-between" spacing={3}>
            <Stack direction="column" justifyContent="space-between" spacing={5} sx={{width:'50%'}}>
                <h1>Browse Majors in VNUK</h1>
                <Stack justifyContent="space-between" spacing={5}>
                    {majors.map((val) => {
                        return(
                            <Box sx={{backgroundColor:'#d9d9d9', borderRadius:'10px', p:'20px'}}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="column" spacing={3}>
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
    )
}

export default MajorList