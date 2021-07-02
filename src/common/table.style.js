export const body = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.8em',
    minHeight: 50,
    maxHeight: 50,
    '& div': {
      maxWidth: '16.66%',
      minWidth: '16.66%',
      padding: '0.5%',
      wordWrap: 'break-word'
    }
  },
  active: {
    borderLeft: '5px solid rgb(13, 92, 46)',
    borderTop: '1px solid rgba(0, 0, 0, 0.103)',
    borderRight: '1px solid rgba(0, 0, 0, 0.103)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.103)',
    '&:hover': {
      backgroundColor: 'rgb(71, 194, 122)',
      cursor: 'pointer'
    }
  },
  inactive: {
    borderLeft: '5px solid rgb(141, 5, 5)',
    borderTop: '1px solid rgba(0, 0, 0, 0.103)',
    borderRight: '1px solid rgba(0, 0, 0, 0.103)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.103)'
  }
};
