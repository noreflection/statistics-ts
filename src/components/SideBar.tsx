import { Theme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import * as React from 'react';

import SimpleCard from './SimpleCard';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      marginRight: theme.spacing.unit * 2
    },
    root: {
      display: 'flex',
      position: 'relative',
      left: '50px',
      top: '50px'
    }
  });

interface IState {
  open: boolean;
}

class SideBar extends React.Component<WithStyles<typeof styles>, IState> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper>

        <SimpleCard />
        <SimpleCard />
        <SimpleCard />

        <SimpleCard />
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
