import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import { Link as RouterLink } from 'react-router-dom';
import {Box, Button} from "@mui/material";  // Make sure to import the CSS

import SearchBox from "../../components/MenuBar/SearchBox";
import TitleBox from "../../components/MenuBar/TitleBox";
import MenuBox from "../../components/MenuBar/MenuBox";


const MenuBar: React.FC = () => {
    return (
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <TitleBox/>
                    <MenuBox/>
                    <SearchBox/>
                </Box>
    );
};

export default MenuBar;
