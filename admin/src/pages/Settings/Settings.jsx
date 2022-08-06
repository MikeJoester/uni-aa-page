import React from 'react';
import {AdminNavbar, DashboardMain} from '../../components';
import images from '../../constants/images';
import './Settings.css';

import {
  Stack,
  Button,
  TextField,
} from '@mui/material';

const Settings = () => {
  return (
    <div className="dashboard-main">
      <AdminNavbar/>
      <Stack sx={{mx:'40px', my:'50px'}} spacing={6}>
        <h1 className="profile-title">Edit Profile</h1>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={4}>
          <img src={images.avatar1} className="profile-image"/>
          <Stack direction="column" justifyContent="space-between" sx={{height:'100%'}}>
            <Stack>
              <h1 className="profile-title">Nguyen Van Liem</h1>
              <p className="profile-title">Position: Lecturer</p>
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
            <p>First Name</p>
            <TextField sx={{width:'400px'}} 
            defaultValue="Liem"
            InputProps={{
              readOnly: true,
            }}></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Last Name</p>
            <TextField sx={{width:'400px'}} 
            defaultValue="Nguyen Van"
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
            <TextField sx={{width:'400px'}}></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>New Password</p>
            <TextField sx={{width:'400px'}} 
            defaultValue=""></TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Confirm Password</p>
            <TextField sx={{width:'400px'}} 
            defaultValue=""></TextField>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default Settings