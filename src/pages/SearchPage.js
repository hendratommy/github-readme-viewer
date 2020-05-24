import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { matchPath, Route, useHistory, useRouteMatch } from "react-router-dom";
import CompactSearchBox from "../components/CompactSearchBox";
import SearchResultView from "./views/SearchResultView";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3),
    marginBottom: 1
  },
  search: {
    maxWidth: 800
  },
}));

function SearchPage() {
  const classes = useStyles();
  const history = useHistory();

  const { path } = useRouteMatch();

  const match = matchPath(history.location.pathname, {
    path: `${path}/:username`
  });

  return (
    <>
      <Paper className={classes.header} square>
        <CompactSearchBox className={classes.search} value={match && match.params.username} action={(searchParam) => history.push(`${path}/${searchParam}`)} />
      </Paper>
      <Route path={`${path}/:username`}>
        <SearchResultView />
      </Route>
    </>
  );
}

export default SearchPage;
