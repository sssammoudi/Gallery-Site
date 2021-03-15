import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { auth } from "../firebase_/index";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Nav(user) {
  const classes = useStyles();
  const { displayName } = user.user;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>{displayName}</Typography>
          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={() => {
              auth.signOut();
            }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
