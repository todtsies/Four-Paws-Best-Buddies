import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        textAlign: "center",
        },
    },
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        borderRadius: 4,
        marginTop: '5rem',
        padding: '16px',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
    },
    },
    searchButton: {
        marginTop: '5px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    searchInput: {
        [theme.breakpoints.down('sm', 'xs')]: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center',
        },
      },
}),);