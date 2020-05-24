import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import SearchTextField from "./SearchTextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: theme.spacing(1)
  },
  label: {
    marginRight: theme.spacing(1)
  }
}));

function CompactSearchBox({ action, value, className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Box display="flex" alignItems="baseline" flexWrap="wrap">
        <Typography variant="h6" className={classes.label}>Search GitHub</Typography>
        <SearchTextField value={value} action={action} />
      </Box>
    </div>
  );
}

CompactSearchBox.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string
};

export default CompactSearchBox;
