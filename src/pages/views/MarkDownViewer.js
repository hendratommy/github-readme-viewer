import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchReadMe, getReadMe } from '../../actions/githubAction'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function MarkDownViewer({ onClose }) {
  const classes = useStyles();

  console.log('md')

  let { repoName } = useParams();
  repoName = decodeURIComponent(repoName);

  const query = useQuery();
  const repoUrl = decodeURIComponent(query.get('repository'));

  // const state = store.markDownViewer;

  // useEffect(() => {
  //   fetchReadMe(repoUrl, dispatch);
  // }, [repoUrl, dispatch]);

  const [state, setState] = useState({});

  useEffect(() => {
    getReadMe(repoUrl).then(data => setState(data));
  }, [repoUrl]);

  return (
    <Dialog fullScreen open TransitionComponent={Transition}>
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { repoName }
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" flex={1} flexDirection="column">
        {false ?
          <>
            <Skeleton variant="text" />
            <Skeleton variant="text" animation={false} />
            <Skeleton variant="text" animation="wave" />
          </> :
          <>
            <code>{state.content}</code>
          </>
        }

      </Box>
    </Dialog>
  );
}

MarkDownViewer.propTypes = {
  store: PropTypes.array,
  dispatch: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MarkDownViewer;