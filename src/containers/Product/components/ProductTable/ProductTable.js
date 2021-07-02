import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { body } from 'common/table.style';
import { EmptyRows, TableFooter, TableHeader } from 'components';
import { Wrapper } from 'hoc';
import { updateObject } from 'library/utility';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(
  updateObject(body, {
    row: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: '0.7em',
      minHeight: 50,
      maxHeight: 50
    },
    column: {
      maxWidth: '23.75%',
      minWidth: '23.75%',
      padding: '0.5%'
    },
    buttonColumn: {
      maxWidth: '5%',
      minWidth: '5%',
      display: 'flex'
    }
  })
);

const ProductTable = props => {
  const { columns, data, page, onPaginate, onEdit } = props;

  const classes = useStyles();
  const rows = data
    ? data.map(item => {
        return (
          <div key={item.id} className={clsx(classes.row, classes.active)} onClick={() => onEdit(item.id)} id={item.id}>
            <div className={classes.column}>{item.name}</div>
            <div className={classes.column}>{item.category.name}</div>
            <div className={classes.column}>{item.description.substring(0, 150)}</div>
            <div className={classes.column}>{(item.priceInCents / 100).toFixed(2)}</div>
          </div>
        );
      })
    : null;

  return (
    <Wrapper>
      <TableHeader columns={columns} hasButton={true} hasCheck={false} />
      <div className={classes.root}>
        {rows}
        <EmptyRows pageSize={page.size} totalItems={data.length} />
      </div>
      <TableFooter onPaginate={onPaginate} page={page} />
    </Wrapper>
  );
};

ProductTable.prototype = {
  id: PropTypes.string.isRequired,
  page: PropTypes.object.isRequired,
  onPaginate: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default ProductTable;
