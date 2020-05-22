import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchBox from "../component/SearchBox";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    margin: '15% auto'
  },
}));

function IndexPage() {
  const classes = useStyles();
  return (
      <Box display="flex" p={1} className={classes.root} flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h4" gutterBottom>Search GitHub</Typography>
        <SearchBox />
      </Box>
  );
}

export default IndexPage;
