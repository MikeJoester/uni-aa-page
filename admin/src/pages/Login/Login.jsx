import React, {useState, useRef, useContext} from 'react';
import {Context} from '../../context/Context';
import './Login.css';
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
    const secretKey = "ambatukam";

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setRegPass(event.target.value);
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

    //Register
    const [regUser, setRegUser] = useState("");
    const [regName, setRegName] = useState("");
    const [regPass, setRegPass] = useState("");
    const [secretPass, setSecretPass] = useState("");

    const handleRegister = async(val) => {
        val.preventDefault();
        if (secretPass === secretKey) {
            try {
                await axios.post("https://uni-aa-page.herokuapp.com/adminlogin/register/", {
                    "full_name" : regName,
                    "username" : regUser,
                    "password": regPass
                });
            
                if(!alert('Register Success!')){window.location.reload();}
            } catch (error) {
                alert(error);
            }
        }
        else {
            alert("Wrong secret key! Cannot register!");
        }
    }

    //Login
    const userRef = useRef();
    const passwordRef = useRef();
    const {user, dispatch, isFetching} = useContext(Context);

    const handleLogin = async(e) => {
        e.preventDefault();
        dispatch({type : "LOGIN_START"});
        try {
            const res = await axios.post("https://uni-aa-page.herokuapp.com/adminlogin/login/", {
                username : userRef.current.value,
                password : passwordRef.current.value
            });
            
            alert('Login Success!');
            dispatch({type : "LOGIN_SUCCESS", payload : res.data});
            
        } catch (error) {
            dispatch({type : "LOGIN_FAILURE"});
            alert('Login Failed! Username or Password is incorrect!');
        }
    }
    console.log(user);

  return (
    <div className="login-main">
        <Stack direction="row" justifyContent="space-between" sx={{height:'100%', mr:'50px'}} alignItems="center" spacing={10}>
            <Stack direction="column" backgroundColor="rgb(21,39,94, 0.85)" sx={{width:'50%', height:'100%'}}>
                {/* <img src="https://vnuk.edu.vn/wp-content/uploads/2021/01/vnuk-symbol-only-official.png" className="vnuk-login-logo" alt="vnuk logo"/> */}
                
                <Stack sx={{pt:'30%'}}>
                    <Stack direction="column" sx={{px:'20%'}} alignItems="center">
                        <h1 className="text-left">Log in to</h1>
                        <h1 className="text-left">VNUK Academic Affairs</h1>
                    </Stack>
                    
                    <Box component='form' noValidate autoComplete="off" sx={{
                        width: '100%',
                        input: {
                            color:'#fff'
                        },
                    }}>
                    <ThemeProvider theme={FormTheme}>
                        <Stack direction="column" sx={{px:'20%'}} spacing={5}>
                            <LoginTextField fullWidth label="Username" variant="standard"
                            inputRef={userRef}/>
                            <LoginTextField
                                label="Password"
                                type="password"
                                variant="standard"
                                inputRef={passwordRef}
                            />
                            <LoginButton variant="contained" style={{width: '100%', height: '50px'}} color="secondary" onClick={handleLogin} disabled={isFetching}
                            >Sign In</LoginButton>
                        </Stack>
                        </ThemeProvider>
                    </Box>
                </Stack>
            </Stack>

            <Stack direction="column" backgroundColor="rgba(255,255,255, 0.85)" sx={{width:'50%', height:'80%', borderRadius:'40px'}}>
                <Stack sx={{pt:'15%'}}>
                    <Stack direction="column" sx={{px:'20%'}} alignItems="center">
                        <h1>Admin Register</h1>
                        <h1>VNUK Academic Affairs</h1>
                    </Stack>
                    
                    <Box component='form' noValidate autoComplete="off" sx={{
                        width: '100%',
                        input: {
                            color:'black'
                        },
                    }}>
                    <ThemeProvider theme={FormTheme}>
                        <Stack direction="column" sx={{px:'20%'}} spacing={4}>
                            <LoginTextField fullWidth label="Full Name" id="custom-css-outlined-input" variant="standard"
                            onChange={e => setRegName(e.target.value)}/>

                            <LoginTextField fullWidth label="Username" id="custom-css-outlined-input" variant="standard"
                            onChange={e => setRegUser(e.target.value)}/>

                            <LoginTextField
                                fullWidth label="Password"
                                variant="standard"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                id="outlined-adornment-password"
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
                                }}/>

                            <LoginTextField fullWidth label="Secret Password" type="password" id="custom-css-outlined-input" variant="standard" onChange={e => setSecretPass(e.target.value)}/>

                            <LoginButton variant="contained" style={{width: '100%', height:'50px'}} color="secondary" onClick={handleRegister}
                            >Register</LoginButton>
                        </Stack>
                        </ThemeProvider>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    </div>
  )
}

export default Login;