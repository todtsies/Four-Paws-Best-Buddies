import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 4,
  },
  caption: {
    paddingTop: '-20px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    paddingTop: '10px',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  breed: {
    paddingBottom: "20px",
    paddingRight: '-6px',
    paddingLeft: '-6px',
    [theme.breakpoints.down('sm', 'xs')]: {
      fontSize: '5px',
    },
    },
}));

