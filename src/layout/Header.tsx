import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#f5f5f5', height: '40px' }}>
            <Toolbar sx={{ minHeight: '40px', height: '40px' }}>
                <Box display="flex" justifyContent="flex-end" width="100%" alignItems="center">
                    <Button component={Link} to="/signup" sx={{ color: '#000000' }}>
                        회원가입
                    </Button>
                    <Button component={Link} to="/login" sx={{ color: '#000000' }}>
                        로그인
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
