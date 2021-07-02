import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.103)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.103)',
    borderRight: '1px solid rgba(0, 0, 0, 0.103)',
    fontSize: '0.8em'
  },
  column: {
    padding: '0.5%',
    fontWeight: 'bold'
  }
}));

const TableHeader = props => {
  const { hasButton, hasCheck, columns, allChecked, onCheckAll } = props;
  const classes = useStyles();
  let activeSpace = 100;

  activeSpace = hasButton ? activeSpace - 5 : activeSpace;
  const buttonColumn = hasButton ? (
    <div className={classes.column} style={{ maxWidth: '5%', minWidth: '5%' }}></div>
  ) : null;

  activeSpace = hasCheck ? activeSpace - 5 : activeSpace;
  const checkColumn = hasCheck ? (
    <div className={classes.column} style={{ maxWidth: '5%', minWidth: '5%' }}>
      <Checkbox checked={allChecked} onChange={() => onCheckAll(!allChecked)} color="primary" />
    </div>
  ) : null;

  const columnSize = activeSpace / props.columns.length;

  return (
    <div className={classes.root}>
      {checkColumn}
      {columns.map(column => {
        return (
          <div
            key={column}
            style={{ maxWidth: `${columnSize}%`, minWidth: `${columnSize}%` }}
            className={classes.column}>
            {column}
          </div>
        );
      })}
      {buttonColumn}
    </div>
  );
};

TableHeader.prototype = {
  columns: PropTypes.array.isRequired,
  hasButton: PropTypes.bool.isRequired,
  hasCheck: PropTypes.bool.isRequired
};

export default TableHeader;
