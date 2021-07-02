import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Wrapper } from 'hoc';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    minWidth: '100%',
    padding: '0.5%',
    minHeight: 50,
    maxHeight: 50,
    borderLeft: '5px solid rgb(0, 100, 0)',
    borderTop: '1px solid rgba(0, 0, 0, 0.103)',
    borderRight: '1px solid rgba(0, 0, 0, 0.103)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.103)',
    backgroundColor: 'rgba(238, 233, 233, 0.15)'
  }
}));

const EmptyRows = props => {
  const { pageSize, totalItems } = props;

  const classes = useStyles();

  const missingRows = [];
  if (totalItems < pageSize) {
    for (let i = totalItems; i < pageSize; i++) {
      missingRows.push(<div key={`empty-${i}`} className={classes.root}></div>);
    }
  }

  return <Wrapper>{missingRows}</Wrapper>;
};

export default EmptyRows;
