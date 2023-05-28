import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Box } from '@mui/material';
import TabContent from '../components/HeaderBar/TabContent';
import LoginJoin from '../components/HeaderBar/LoginJoin';

const Header: React.FC = () => {
    const location = useLocation();
    const tabPaths = ["/tab1", "/"];
    const [value, setValue] = useState(tabPaths.indexOf(location.pathname));

    useEffect(() => {
        setValue(tabPaths.indexOf(location.pathname));
    }, [location]);

    return (
        <AppBar
            position="static"
            sx={{
                minHeight: '40px',
                backgroundColor: '#f5f5f5',
                height: '40px',
                elevation: 0,
                boxShadow: 'none',
                borderBottom: 'none'
            }}
        >
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                <TabContent value={value} setValue={setValue} />
                <LoginJoin />
            </Box>
        </AppBar>
    );
};

export default Header;
