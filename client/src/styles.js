import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgb(255,218,185)',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
         mainContainer: {
          flexDirection: "column-reverse",
        },
        heading: {
          fontSize: 22,
          paddingLeft: '5px',
        },
        image:  {
          marginRight: '5px',
          marginLeft: "5px",
          padding: '5px'
        },
      }
      
}));