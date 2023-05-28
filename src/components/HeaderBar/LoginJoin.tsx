import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const LoginJoin: React.FC = () => {
    return (
        <Box display="flex">
            <Typography color={"black"} sx={{ padding: '10px' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px' }}>로그인</Link>
            </Typography>
            <Typography color={"black"} sx={{ padding: '10px' }}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit', fontSize: '14px', marginRight: '10px' }}>회원가입</Link>
            </Typography>
        </Box>
    );
};

export default LoginJoin;
