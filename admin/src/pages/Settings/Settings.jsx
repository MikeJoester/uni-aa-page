import React, {useContext} from 'react';
import {AdminNavbar} from '../../components';
import axios from 'axios';
import {Context} from '../../context/Context';
import images from '../../constants/images';
import './Settings.css';

import {
  Stack,
  Button,
  TextField,
} from '@mui/material';

const Settings = () => {
  const {user} = useContext(Context);
  return (
    <div className="dashboard-main">
      <AdminNavbar/>
      <Stack sx={{mx:'40px', my:'50px'}} spacing={7}>
        <h1 className="profile-title">Edit Profile</h1>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={4}>
          <img src={images.avatar1} className="profile-image"/>
          <Stack direction="column" justifyContent="space-between" sx={{height:'100%'}}>
            <Stack>
              <h1 className="profile-title">{user.full_name}</h1>
              <p className="profile-title">Position: University Administrator</p>
            </Stack>
            <Stack>
              <Button sx={{height:'40px', fontSize:'20px', width:'70%'}} variant="contained">Upload Picture</Button>
              <p>Maximum image size is no more than 500KB.</p>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent="space-between" spacing={3}>
          <h1 className="profile-title">ACCOUNT INFORMATION</h1>
          <Stack direction="row" justifyContent="space-between">
            <p>Full Name</p>
            <TextField sx={{width:'400px'}}
            defaultValue={user.full_name}
            InputProps={{
              readOnly: true,
            }}></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Email</p>
            <TextField sx={{width:'400px'}} 
            defaultValue="liem.nguyen@vnuk.udn.vn"
            InputProps={{
              readOnly: true,
            }}></TextField>
          </Stack>
        </Stack>

        <Stack direction="column" justifyContent="space-between" spacing={3}>
          <h1 className="profile-title">CHANGE PASSWORD</h1>
          <Stack direction="row" justifyContent="space-between">
            <p>Current Password</p>
            <TextField sx={{width:'400px'}} type="password"></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>New Password</p>
            <TextField sx={{width:'400px'}} 
            defaultValue="" type="password"></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Confirm Password</p>
            <TextField sx={{width:'400px'}} 
            defaultValue="" type="password"></TextField>
          </Stack>
          <Stack direction="column" alignItems="center">
            <Button sx={{height:'40px', fontSize:'20px', width:'50%'}}variant="contained">Change Password</Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default Settings