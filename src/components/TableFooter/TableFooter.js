import React from 'react';
import { FirstPage, LastPage, ChevronLeft, ChevronRight } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '0.2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.103)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.103)',
    borderRight: '1px solid rgba(0, 0, 0, 0.103)'
  },
  totalItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '30%',
    '& select': {
      borderRadius: 5,
      fontSize: '1.2em',
      minWidth: 25,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 15, 0.1)',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)'
      }
    },
    '& div': {
      marginLeft: 5,
      padding: '1%',
      whiteSpace: 'nowrap'
    }
  },
  paginator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5%',
      fontSize: '1.2em',
      margin: '0 2% 0 2%',
      minWidth: 25,
      borderRadius: 5,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 15, 0.1)',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
        border: '2px solid rgb(25, 45, 145)',
        borderRadius: 5
      }
    }
  },
  selected: {
    border: '2px solid rgb(25, 45, 145)',
    borderRadius: 5,
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)'
  },
  disabled: {
    pointerEvents: 'none'
  }
}));

const TableFooter = props => {
  const { onPaginate, page } = props;

  const classes = useStyles();

  const perPage = [5, 10, 20];

  const pages = [];
  for (let i = 1; i <= page.totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.root}>
      <div className={classes.totalItems}>
        <select onChange={e => onPaginate(1, e.target.value)}>
          {perPage.map(pageSize => {
            return (
              <option key={`page-size-${pageSize}`} value={pageSize}>
                {pageSize}
              </option>
            );
          })}
        </select>
        <div>{`Rows of ${page.totalItems}`}</div>
      </div>
      <div className={classes.paginator}>
        <div onClick={() => onPaginate(1, page.size)} className={page.first ? classes.disabled : ''}>
          <FirstPage />
        </div>
        <div onClick={() => onPaginate(page.number - 1, page.size)} className={page.first ? classes.disabled : ''}>
          <ChevronLeft />
        </div>
        {pages.map(number => {
          return (
            <div
              key={`page-${number}`}
              onClick={() => onPaginate(number, page.size)}
              className={number === page.number ? clsx(classes.selected) : ''}>
              {number}
            </div>
          );
        })}
        <div onClick={() => onPaginate(page.number + 1, page.size)} className={page.last ? classes.disabled : ''}>
          <ChevronRight />
        </div>
        <div onClick={() => onPaginate(page.totalPages, page.size)} className={page.last ? classes.disabled : ''}>
          <LastPage />
        </div>
      </div>
    </div>
  );
};

TableFooter.prototype = {
  paginate: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired
};

export default TableFooter;
