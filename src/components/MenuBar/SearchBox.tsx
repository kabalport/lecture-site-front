import IconButton from "@mui/material/IconButton";
import {Box} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const SearchBox: React.FC = () => {
    return (
        <IconButton style={{ padding: 0 }}>
            <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchIcon style={{ color: '#FFFFFF', width: '30px', height: '30px' }} />
            </Box>
        </IconButton>
    )
};

export default SearchBox;