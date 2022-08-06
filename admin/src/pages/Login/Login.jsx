import React, {useState, useEffect, useRef, useContext} from 'react';
import './Login.css';
import images from '../../constants/images';
import axios from 'axios';

import {
    Box, 
    TextField, 
    Button, 
    IconButton, 
    InputAdornment,
    Stack,
} from '@mui/material';

import { 
    createTheme, 
    ThemeProvider, 
    styled 
} from '@mui/material/styles';

import {Visibility, VisibilityOff} from '@mui/icons-material';

const FormTheme = createTheme({
    palette: {
      primary: {
        main: '#404040',
      },
      secondary: {
        light: '#0066ff',
        main: '#4C4DDC',
      },
      
      contrastThreshold: 2,
      tonalOffset: 0.1,
    },
  });

const LoginTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#7b7b7b',
        fontWeight: '500',
    },
    '& label': {
        color: '#9E9E9E',
        fontWeight: '500',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#7b7b7b',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,

        '& fieldset': {
            borderColor: '#404040',
        },
        '&:hover fieldset': {
            borderColor: '#7b7b7b',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#7b7b7b',
        },
    },
});

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    textTransform: 'Capitalize',
  }));

const Login = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const userRef = useRef();
    const passwordRef = useRef();
    // const {user, dispatch, isFetching} = useContext(Context);

    // const handleClick = async(e) => {
    //     e.preventDefault();
    //     dispatch({type : "LOGIN_START"});
    //     try {
    //         const res = await axios.post("https://fendmaster-app.herokuapp.com/api/auth/login", {
    //             username: userRef.current.value,
    //             password: passwordRef.current.value,
    //         })
    //         dispatch({
    //             type : "LOGIN_SUCCESS",
    //             payload: res.data,
    //         });
    //         res.data && window.location.replace("/UserHome");
    //         alert("Log In success!");
    //     } catch (error) {
    //         dispatch({
    //             type : "LOGIN_FAILURE",
    //         });
    //         alert("Cannot Log In, password or username does not match!");
    //     }
    // };
    // console.log(isFetching);

  return (
    <div className="app-login-main">
        <Stack direction="column" backgroundColor="#fff" sx={{width:'50%', height:'100%'}} spacing={5}>
            <img src="https://vnuk.edu.vn/wp-content/uploads/2021/01/vnuk-symbol-only-official.png" className="vnuk-login-logo" alt="vnuk logo"/>
            
            <Stack sx={{pt:'20%'}}>
                <Stack direction="column" sx={{px:'20%'}} alignItems="center">
                    <h1>Log in to</h1>
                    <h1>VNUK Academic Affairs</h1>
                </Stack>
                
                <Box component='form' noValidate autoComplete="off" sx={{
                    width: '100%',
                    input: {
                        color:'black'
                    },
                }}>
                <ThemeProvider theme={FormTheme}>
                    <Stack direction="column" sx={{px:'20%'}} spacing={3}>
                        <LoginTextField fullWidth label="Email" id="custom-css-outlined-input" variant="standard"
                        inputRef={userRef}/>
                        <LoginTextField
                            fullWidth label="Password"
                            variant="standard"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            id="outlined-adornment-password" 
                            style={{ marginTop: 25, marginBottom: 25 }}
                            inputRef={passwordRef}
                            InputProps= {
                            {endAdornment:
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    color="primary"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <LoginButton variant="contained" style={{width: '100%'}} color="secondary"
                        >Sign In</LoginButton>
                    </Stack>
                    </ThemeProvider>
                </Box>
            </Stack>
        </Stack>
        <Stack direction="column" backgroundColor="#fff" sx={{width:'50%', height:'100%'}} spacing={5}>
            <img src="https://vnuk.edu.vn/wp-content/uploads/2021/01/vnuk-symbol-only-official.png" className="vnuk-login-logo" alt="vnuk logo"/>
            
            <Stack sx={{pt:'20%'}}>
                <Stack direction="column" sx={{px:'20%'}} alignItems="center">
                    <h1>Log in to</h1>
                    <h1>VNUK Academic Affairs</h1>
                </Stack>
                
                <Box component='form' noValidate autoComplete="off" sx={{
                    width: '100%',
                    input: {
                        color:'black'
                    },
                }}>
                <ThemeProvider theme={FormTheme}>
                    <Stack direction="column" sx={{px:'20%'}} spacing={3}>
                        <LoginTextField fullWidth label="Email" id="custom-css-outlined-input" variant="standard"
                        inputRef={userRef}/>
                        <LoginTextField
                            fullWidth label="Password"
                            variant="standard"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            id="outlined-adornment-password" 
                            style={{ marginTop: 25, marginBottom: 25 }}
                            inputRef={passwordRef}
                            InputProps= {
                            {endAdornment:
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    color="primary"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <LoginButton variant="contained" style={{width: '100%'}} color="secondary"
                        >Sign In</LoginButton>
                    </Stack>
                    </ThemeProvider>
                </Box>
            </Stack>
        </Stack>
    </div>
  )
}

export default Login;