import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  subheading: {
    color: 'black',
    marginTop: '0px',
    letterSpacing: '.25rem',
    display: 'block',
  },

  heading: {
    color: 'rgb(230,200,185)',
    textDecoration: 'none',
    fontSize: "4vw",
    marginTop: '5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: "6vw",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "5.9vw",
    },
  },
  image: {
    marginLeft: '15px',
    borderRadius: "50%",
    [theme.breakpoints.down('sm', 'xs')]: {
      display: "none",
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 10,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '15px',
    paddingTop: '10px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '10px',
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '12px',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signInButton: {
    paddingTop: "10px",
  }
  
}));