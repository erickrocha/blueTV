import { makeStyles } from '@material-ui/core';
import LinkButton from 'components/LinkButton';
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
    flexGrow: 2,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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
        <div className={classes.menuItem}>
          <LinkButton href="#showcase">Recargas</LinkButton>
        </div>
        <div className={classes.menuItem}>
          <LinkButton>Downloads</LinkButton>
        </div>
        <div className={classes.menuItem}>
          <LinkButton>Tutorial</LinkButton>
        </div>
        <div className={classes.menuItem}>
          <LinkButton>Programação TV</LinkButton>
        </div>
        <div className={classes.menuItem}>
          <LinkButton>Loja</LinkButton>
        </div>
        <div className={classes.menuItem}></div>
      </div>
    </menu>
  );
};

export default TopBar;
