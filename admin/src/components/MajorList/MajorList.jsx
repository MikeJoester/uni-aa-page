import React from 'react';
import './MajorList.css';

import {
    Stack,
    Box,
    Grid,
    Paper,
} from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MajorList = () => {
    return (
        <Stack>ASS</Stack>
    )
}

export default MajorList