import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justify: 'flex-start'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width: '100%'
  },
  listItem: {
    display: "inline-block",
    marginLeft: '2%',
    color: "#ffffff",
    textDecoration: "none",
    backgroundColor: "#000",
    padding: "2%",
    borderRadius: "5%"
  },
  list: {
    width: '100%',
    alignItems: 'flex-start'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MERN Stack Todo List
          </Typography>
          <ul className={classes.list}>
            <Link to="/" className={classes.listItem}>ToDos</Link>
            <Link to="/create" className={classes.listItem}>Create Todo</Link>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;