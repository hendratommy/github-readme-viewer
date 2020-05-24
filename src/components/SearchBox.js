import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import SearchTextField from "./SearchTextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: theme.spacing(1),
  },
  label: {
    margin: '0 auto'
  }
}));

function SearchBox({ action, className }) {
  const classes = useStyles();

  return (
      <Box display="flex" flexDirection="column" className={clsx(classes.root, className)}>
        <Typography className={classes.label} variant="h4" gutterBottom>Search GitHub</Typography>
        <SearchTextField action={action} />
      </Box>
  );
}

SearchBox.propTypes = {
  action: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default SearchBox;
