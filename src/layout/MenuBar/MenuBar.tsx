import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import { Link as RouterLink } from 'react-router-dom';
import {Box, Button} from "@mui/material";  // Make sure to import the CSS

import SearchBox from "../../components/MenuBar/SearchBox";
import TitleBox from "../../components/MenuBar/TitleBox";


const MenuBar: React.FC = () => {
    return (
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
                    <TitleBox/>
                    <Box>
                        <div className="dropdown">
                            <Button color="inherit" component={RouterLink} to="/products">
                                부동산융합아카데미란
                            </Button>
                            <div className="dropdownContent">
                                <Link to="/products/shirts">부동산융합아카데미란</Link>
                                <Link to="/products/pants">로드맵</Link>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Button color="inherit" component={RouterLink} to="/products">
                                커뮤니티
                            </Button>
                            <div className="dropdownContent">
                                <Link to="/products/shirts">공지사항</Link>
                                <Link to="/products/pants">구인구직</Link>
                                <Link to="/products/pants">자주묻는질문</Link>
                                <Link to="/products/pants">1:1문의</Link>
                            </div>
                        </div>
                        <Button color="inherit" component={RouterLink} to="/">
                            강의검색
                        </Button>
                    </Box>
                    <SearchBox/>
                </Box>
    );
};

export default MenuBar;
