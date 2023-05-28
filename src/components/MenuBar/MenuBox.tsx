import {Box, Button} from "@mui/material";
import {Link, Link as RouterLink} from "react-router-dom";
import React from "react";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@material-ui/icons/Search";


const MenuBox: React.FC = () => {
    return (
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
    )
};

export default MenuBox;