import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: '15% auto',
  },
}));

function IndexPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <SearchBox action={(searchParam) => history.push(`/search/${searchParam}`)} />
    </div>
  );
}

export default IndexPage;
