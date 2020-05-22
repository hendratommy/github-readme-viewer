import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));


function SearchBox() {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState('');
    return (
        <TextField className={classes.root} variant="outlined" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            )
        }} />
    );
}

export default SearchBox;
