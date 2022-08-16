import React, { useState, useEffect } from 'react';
import {PacmanLoader} from "react-spinners";
import axios from 'axios';
import {Context} from '../../context/Context';
import './BlogList.css';

import {
  Stack,
  Button,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from '@mui/material';

import TextareaAutosize from '@mui/base/TextareaAutosize';

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

const BlogList = () => {
  //loading screen
  const [loading, setLoading] = useState(false);

  //Fetch Post List
  const [posts, setPosts] = useState([]);
  const [details, setDetails] = useState({});

   //modal
   const [modal, setModal] = useState(false);
   const handleOpenModal = () => setModal(true);
   const handleCloseModal = () => setModal(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async() => {
      const res = await axios.get("https://uni-aa-page.herokuapp.com/blogs/");
      setPosts(res.data);
      // console.log(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //Modal Manager
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Writing Function
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCat] = useState("");
  const {user} = useState(Context);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
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
            <IconButton title="Edit Blog/Post Details" onClick={e=>{
                e.preventDefault();
                setDetails(params.row);
                setModal(true);
                console.log(params.row);  
              }}>
                <EditIcon/>
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
                    <Stack sx={style} spacing={3} direction="column">
                        <h2>Edit Survey / Form Information</h2>
                        <TextField id="outlined-basic" label="Title" variant="outlined" defaultValue={details.title}
                        onChange={e => setTitle(e.target.value)}/>
                        <TextField id="outlined-basic" label="Category" variant="outlined" defaultValue={details.category}
                        onChange={e => setCat(e.target.value)}/>
                        <TextareaAutosize
                          onChange={e => setDesc(e.target.value)}
                          defaultValue={details.desc}
                          maxRows={10}
                          aria-label="maximum height"
                          placeholder="Write or Paste the post content here..."
                          style={{ width: "100%", height: '200px', fontSize:'15px' }}
                        />
                        <CreateButton onClick={
                          async() => {
                            const newBlog = {
                              "blog_title" : title,
                              "blog_description" : desc,
                              "category" : category,
                            };
                        
                            try {
                              await axios.patch(`https://uni-aa-page.herokuapp.com/blogs/${details.id}`, newBlog);
                              if(!alert('Updated Blog!')){window.location.reload();}
                            } catch (error) {alert(error);}
                          }
                        } sx={{height:'60px'}}>Update Blog</CreateButton>
                    </Stack>
                  </Fade>
              </Modal>
            <IconButton sx={{color: 'red'}} title="Delete Blod/Post"
            onClick={async(e) =>{
              e.preventDefault();
              let confirm = window.confirm('Are you sure you want to delete this element?');
              if (confirm) {
                try {
                  await axios.delete(`https://uni-aa-page.herokuapp.com/blogs/${params.row.id}`);
                  if (!alert("Post Terminated :)")) {window.location.reload();} 
                } catch (error) {
                  alert(error);
                }
              }
              else {
                alert('Decided not to terminate the post :)');
              }
            }}>
              <DeleteIcon/>
            </IconButton>
          </Stack>
        )
      }
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
      "blog_title" : title,
      "blog_description" : desc,
      "category" : category,
    };

    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("https://uni-aa-page.herokuapp.com/upload", data);
      } catch (error) {}
    }

    try {
      const res = await axios.post("https://uni-aa-page.herokuapp.com/blogs", newPost);
      if(!alert('Post Created!')){window.location.reload();}
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
            <h1>Manage Posts</h1>
            <CreateButton onClick={handleOpen}>Create Post</CreateButton>
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
                      <h1>Add New Post To The Database</h1>
                      <Stack direction="column" spacing={4}>
                        <Button variant="contained">Add Image</Button>
                        <TextField id="outlined-basic" label="Title" variant="outlined"
                        onChange={e => setTitle(e.target.value)}/>
                        <TextField id="outlined-basic" label="Category" variant="outlined"
                        onChange={e => setCat(e.target.value)}/>
                        <TextareaAutosize
                          onChange={e => setDesc(e.target.value)}
                          maxRows={10}
                          aria-label="maximum height"
                          placeholder="Write or Paste the post content here..."
                          style={{ width: "100%", height: '200px', fontSize:'15px' }}
                        />
                        <CreateButton onClick={handleSubmit}>Add Post</CreateButton>
                      </Stack>
                  </Stack>
                </Fade>
            </Modal>
          </Stack>
          <DataGrid
            sx={{fontSize:'17px'}}
            rows={posts.map((val) => {
              return {
                id: val._id,
                title: val.blog_title,
                category: val.category,
                date: new Date(val.createdAt).toDateString(),
                desc: val.blog_description
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

export default BlogList;