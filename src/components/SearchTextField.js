import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  text: {
    width: '100%',
  },
}));


function SearchTextField({ action, value, className }) {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState(value ? value : '');

  return (
    <Box display="flex" flexGrow={1} className={clsx(classes.root, className)}>
      <TextField variant="outlined" value={searchInput} className={classes.text}
        onChange={e => setSearchInput(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            action(searchInput)
          }
        }} InputProps={{
          startAdornment: (
            <InputAdornment position="end">https://github.com/</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => action(searchInput)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }} />
    </Box>
  );
}

SearchTextField.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string
};

export default SearchTextField;
