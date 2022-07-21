import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogList.css';

import {
  Stack,
  Button,
  IconButton,
} from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'date',
    headerName: 'Created At',
    type: 'string',
    width: 230,
  },
  {
    field: 'desc',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
  },
  { 
    field:'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return(
        <Stack direction='row' spacing={3} justifyContent='space-between'>
          <IconButton>
            <EditIcon/>
          </IconButton>
          <IconButton sx={{color: 'red'}}>
            <DeleteIcon/>
          </IconButton>
        </Stack>
      )
    }
  },
];

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("http://localhost:5000/blogs/");
      setPosts(res.data);
      console.log(res.data)
    }
    fetchPosts();
  }, []);

  var rows = posts.map((val) => {
    return {
      id: val._id,
      title: val.blog_title,
      category: val.category,
      date: new Date(val.createdAt).toDateString(),
      desc: val.blog_description
    }
  });
  console.log(rows);
  return (
    <Stack direction="column" spacing={4} sx={{mx:'40px', mt:'50px', width:'100%', color:'#000248'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h1>Manage Posts</h1>
        <CreateButton>Create Post</CreateButton>
      </Stack>
      <DataGrid
        sx={{fontSize:'17px'}}
        rows={rows} 
        columns={columns} 
        pagesize={10} 
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection/>
    </Stack>
  )
}

export default BlogList;