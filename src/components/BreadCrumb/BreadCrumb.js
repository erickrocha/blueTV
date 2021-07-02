import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1%'
  },
  bold: {
    fontWeight: 'bold'
  }
}));

const BreadCrumb = props => {
  const { tree, label } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {tree.map(node => (
          <Link color="inherit" key={`bread-crumb-${node.label}`} href={node.href}>
            {node.label}
          </Link>
        ))}
        <Typography className={classes.bold} color="textPrimary">
          {label}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

BreadCrumb.prototype = {
  path: PropTypes.string
};

export default BreadCrumb;
