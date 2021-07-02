export const defaultStyle = theme => {
  return {
    root: {
      padding: theme.spacing(3),
      transition: 'all 0.3s ease-out',
      backgroundColor: '#455272',
      color: 'white'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1),
      '& div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      '& h2': {
        marginLeft: '1%'
      }
    },
    body: {
      backgroundColor: 'white',
      padding: theme.spacing(3),
      marginTop: 2,
      borderRadius: 2,
      color: 'black'
    }
  };
};
