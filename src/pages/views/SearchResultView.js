import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { Route, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { fetchRepos } from '../../actions/githubAction';
import ProjectCard from '../../components/ProjectCard';
import { useRootReducer } from '../../reducer/rootReducer';
import MarkDownViewer from './MarkDownViewer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  row: {
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(5),
    maxWidth: 800
  },
  column: {
    maxWidth: 800
  }
}));

function SearchResultView() {
  const classes = useStyles();

  console.log('search');

  const { username } = useParams();
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const [store, dispatch] = useRootReducer();

  const state = store.searchResult;

  useEffect(() => {
    fetchRepos(username, dispatch);
  }, [username, dispatch]);


  return (
    <Box display="flex" className={classes.root}>
      <Box display="flex" flex={1} flexDirection="column">
        {
          state.loading ?
            <>
              <ProjectCard skeleton className={classes.row} name='' htmlUrl='' href='' />
              <ProjectCard skeleton className={classes.row} name='' htmlUrl='' href='' />
              <ProjectCard skeleton className={classes.row} name='' htmlUrl='' href='' />
            </> :
            <>
              {
                state.error ? <Typography variant="h6">{state.error.response ? state.error.response.data.message : state.error.message}</Typography> :
                  state.repos.map((repo) => (
                    <ProjectCard key={`${username}_${repo.id}`} className={classes.row} href={`${url}/${encodeURIComponent(repo.fullName)}?repository=${encodeURIComponent(repo.url)}`} 
                      name={repo.fullName} htmlUrl={repo.htmlUrl} description={repo.description} homepage={repo.homepage} license={repo.license} />
                  ))
              }
            </>
        }

      </Box>
      <div>
        <Route path={`${path}/:repoName`}>

          <Box display="flex" flex={1} flexDirection="column" className={classes.column}>
            <MarkDownViewer store={store} dispatch={dispatch} onClose={() => history.goBack()} />
          </Box>

        </Route>
      </div>
    </Box>
  );
}

export default SearchResultView;
