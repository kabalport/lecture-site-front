import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';

const TabContent: React.FC<{ value: number, setValue: (value: number) => void }> = ({ value, setValue }) => {
    const tabPaths = ["/tab1", "/"];
    const tabLabels = ["부동산지원포털", "부동산융합아카데미"];

    return (
        <Tabs
            value={value}
            sx={{
                '& .MuiTabs-indicator': {
                    display: 'none',
                    minHeight: '40px',
                    height: '40px',
                },
                minHeight: '40px',
                height: '40px',
            }}
        >
            {tabPaths.map((tab, index) => (
                <Tab
                    style={{color: value === index ? 'black': 'grey'}}
                    key={index}
                    label={tabLabels[index]}
                    component={Link}
                    to={tab}
                    sx={{ backgroundColor: value === index ? 'white' : 'inherit', fontWeight:'bold' }}
                />
            ))}
        </Tabs>
    );
};

export default TabContent;
