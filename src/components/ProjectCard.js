import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HomeIcon from '@material-ui/icons/Home';
import Skeleton from '@material-ui/lab/Skeleton';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  skeleton: {
    width: 800
  },
  space: {
    marginBottom: 12
  },
  iconLabel: {
    marginLeft: theme.spacing(1)
  },
  skeletonIcon: {
    width: 20
  },
  skeletonIconLabel: {
    width: 150
  }
}));

function renderSkeleton(classes, className) {
  return (
    <Box display="flex" flexDirection="column" alignSelf="flex-start" className={clsx(classes.root, classes.skeleton, className)}>
      <Typography variant="caption" color="textSecondary" gutterBottom><Skeleton variant="text" /></Typography>
      <Typography variant="h5"><Skeleton variant="text" animation={false} /></Typography>
      <div className={classes.space} />
      <Typography variant="body2"><Skeleton variant="text" animation="wave" /></Typography>
      <div className={classes.space} />
      <Box display="flex" alignItems="center">
        <Skeleton variant="circle" className={classes.skeletonIcon} />
        <Typography className={clsx(classes.iconLabel, classes.skeletonIconLabel)} variant="body2">
          <Skeleton variant="text" animation="pulse" />
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Skeleton variant="circle" className={classes.skeletonIcon} />
        <Typography className={clsx(classes.iconLabel, classes.skeletonIconLabel)} variant="body2">
          <Skeleton variant="text" animation="pulse" />
        </Typography>
      </Box>
    </Box>
  );
}


function ProjectCard({ name, href, htmlUrl, skeleton, description, homepage, license, className }) {
  const classes = useStyles();

  if (skeleton) {
    return renderSkeleton(classes, className);
  }

  return (
    <Box display="flex" flexDirection="column" alignSelf="flex-start" className={clsx(classes.root, className)}>
      <Typography variant="caption" color="textSecondary" gutterBottom>{htmlUrl}</Typography>
      <Link to={href}><Typography variant="h5">{name}</Typography></Link>
      <div className={classes.space} />
      <Typography variant="body2">{description}</Typography>
      <div className={classes.space} />
      {homepage && <Box display="flex" alignItems="center"><HomeIcon fontSize="small" /><Typography className={classes.iconLabel} variant="body2">{homepage}</Typography></Box>}
      {license && <Box display="flex" alignItems="center"><AccountBalanceIcon fontSize="small" /><Typography className={classes.iconLabel} variant="body2">{license}</Typography></Box>}
    </Box>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  skeleton: PropTypes.bool,
  description: PropTypes.string,
  homepage: PropTypes.string,
  license: PropTypes.string,
  className: PropTypes.string
};

export default ProjectCard;
