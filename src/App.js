import React from 'react';
import { makeStyles, Container, Paper } from '@material-ui/core';
import SummaryTable from './Components/SummaryTable';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: { padding: 10 },
  heading: {
    padding: 5,
    textAlign: 'center',
    fontSize: '32px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'row',
    '& p': { marginLeft: 20 },
  },
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  const getData = () => {
    Axios({
      method: 'GET',
      url: 'https://api.covid19api.com/summary',
    })
      .then((response) => {
        setData(response.data.Countries);
      })
      .catch(console.error);
  };
  React.useEffect(getData, []);
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth='lg'>
        <Paper elevation={0} className={classes.heading}>
          <img
            width='100px'
            height='100px'
            src='https://images.vexels.com/media/users/3/193092/isolated/preview/bc883ba3bb35fc54dd1aa45844dc6471-covid-19-stroke-icon-by-vexels.png'
          ></img>
          <p>COVID 19 SUMMARY</p>
        </Paper>
        <br />
        <SummaryTable data={data} />
      </Container>
    </React.Fragment>
  );
};

export default App;
