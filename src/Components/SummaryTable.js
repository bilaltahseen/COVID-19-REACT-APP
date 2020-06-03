import React from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const SummaryTable = (props) => {
  const classes = useStyles();
  const rows = props.data;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Country</TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                NewConfirmed
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                TotalConfirmed
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                NewDeaths
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                TotalDeaths
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                NewRecovered
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }} align='right'>
                TotalRecovered
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.CountryCode}>
                <TableCell
                  style={{ fontWeight: 'bold' }}
                  scope='row'
                  component='th'
                >
                  <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <img
                      src={`https://www.countryflags.io/${row.CountryCode}/flat/32.png`}
                    />
                    <p>{row.Country}</p>
                  </Box>
                </TableCell>
                <TableCell align='right'>{row.NewConfirmed}</TableCell>
                <TableCell align='right'>{row.TotalConfirmed}</TableCell>
                <TableCell align='right'>{row.NewDeaths}</TableCell>
                <TableCell align='right'>{row.TotalDeaths}</TableCell>
                <TableCell align='right'>{row.NewRecovered}</TableCell>
                <TableCell align='right'>{row.TotalRecovered}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default SummaryTable;
