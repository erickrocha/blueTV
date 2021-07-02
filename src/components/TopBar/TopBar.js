import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '10%',
    backgroundColor: '#000CB2',
    display: 'flex'
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 2
  },
  menuItem: {
    color: '#FEFDFD',
    padding: theme.spacing(2)
  }
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <menu className={classes.root}>
      <div className={classes.logo}>
        <div>
          <img src={logo} width={138} height={69} alt="BlueTV" />
        </div>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuItem}>Regargas</div>
        <div className={classes.menuItem}>Downloads</div>
        <div className={classes.menuItem}>Tutorial</div>
        <div className={classes.menuItem}>Programação TV</div>
        <div className={classes.menuItem}>Loja</div>
        <div className={classes.menuItem}>Contato</div>
      </div>
    </menu>
  );
};

export default TopBar;
