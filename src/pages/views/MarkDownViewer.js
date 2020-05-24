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
import React, { useEffect, useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchReadMe } from '../../actions/githubAction';
import Markdown from '../../components/Markdown';
import { initialState, reducer } from '../../reducer/markDownViewerReducer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  content: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(5),
  }
}));

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function MarkDownViewer({ onClose }) {
  const classes = useStyles();

  let { repoName } = useParams();
  repoName = decodeURIComponent(repoName);

  const query = useQuery();
  const repoUrl = decodeURIComponent(query.get('repository'));

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchReadMe(repoUrl, dispatch);
  }, [repoUrl]);

  // const [state, setState] = useState({});

  // useEffect(() => {
  //   getReadMe(repoUrl).then(data => setState(data));
  // }, [repoUrl]);

  return (
    <Dialog fullScreen open TransitionComponent={Transition}>
      <AppBar className={classes.appBar} color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {repoName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" flex={1} flexDirection="column">
        {state.loading ?
          <>
            <Skeleton variant="text" />
            <Skeleton variant="text" animation={false} />
            <Skeleton variant="text" animation="wave" />
          </> :
          <div className={classes.content}>
            <Markdown>{state.readme.content}</Markdown>
          </div>
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