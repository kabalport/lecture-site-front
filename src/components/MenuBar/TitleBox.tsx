import IconButton from "@mui/material/IconButton";
import {Box, Typography} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from 'react-router-dom';


const TitleBox: React.FC = () => {
    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px'}}>
                    부융아
                </Typography>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px'}}>
                    부동산융합아카데미
                </Typography>
            </Link>
        </Box>
    )
};

export default TitleBox;