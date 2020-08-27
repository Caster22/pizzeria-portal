import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { mergeBookingsAndEvents, changeFormatOfTime} from '../../../Utils/MergeArrays';
import PropTypes from 'prop-types';




const hours = [12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22];
const events = [
  {id: 1, date: '2020-08-28', hour: '12:30', table: [1, 3], repeat: 'daily', duration: 3, ppl: 2, starters: ['bread']},
  {id: 2, date: '2020-08-28', hour: '13:00', table: [2], repeat: 'daily', duration: 1, ppl: 1, starters: ['bread', 'water']},
  {id: 3, date: '2020-08-28', hour: '18:30', table: [3], repeat: 'daily', duration: 2, ppl: 2, starters: ['water']},
  {id: 4, date: '2020-08-28', hour: '18:30', table: [1], repeat: 'daily', duration: 2, ppl: 1, starters: ['bread']},
];

const bookings = [
  {id: 1, date: '2020-08-30', hour: '15:00', table: [2], duration: 4, ppl: 5, starters: ['water']},
  {id: 2, date: '2020-08-29', hour: '21:00', table: [3], duration: 1, ppl: 2, starters: ['bread']},
  {id: 3, date: '2020-08-29', hour: '16:00', table: [1], duration: 1, ppl: 4, starters: ['bread', 'water']},
];

const valueHalfHour = value =>
  value.toString().length > 2 ? value.toString().replace('.5', ':30') : `${value.toString()}:00`;



const Tables = () => {
  return(
    <div className={styles.component}>
      <div className={styles.tableMargin}>
        <h2 className={styles.title}>Choose date and time you want to book:</h2>
        <Grid container justify='space-between'>
          <TextField id='date' label='Date' type='date'  InputLabelProps={{ shrink: true }} />
          <Grid item xs={6}>
            <Typography id='Time-slider' gutterBottom>
              Time:
            </Typography>
            <Slider
              defaultValue={12}
              getAriaValueText={valueHalfHour}
              aria-labelledby='Time-slider'
              valueLabelDisplay='auto'
              valueLabelFormat={valueHalfHour}
              step={0.5}
              marks
              min={12}
              max={22}
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.tableMargin}>
        <h2 className={styles.title}>Events and bookings:</h2>
        <div className={styles.button}>
          <Button component={ Link } to={`${process.env.PUBLIC_URL}/tables/events/new`} color='primary'>New Event</Button>
          <Button component={ Link } to={`${process.env.PUBLIC_URL}/tables/booking/new`} color='primary'>New Booking</Button>
        </div>
        <TableContainer component={ Paper }>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Hour</TableCell>
                <TableCell align='center'>Table number 1</TableCell>
                <TableCell align='center'>Table number 2</TableCell>
                <TableCell align='center'>Table number 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hours.map(hour => (
                <TableRow key={hour}>
                  <TableCell align='center'>{valueHalfHour(hour)}</TableCell>
                  {mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                    .filter(filterEvent => filterEvent.table.indexOf(1) !== -1).length > 0
                    ?
                    mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                      .filter(filterEvent => filterEvent.table.indexOf(1) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="primary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                  {mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                    .filter(filterEvent => filterEvent.table.indexOf(2) !== -1).length > 0
                    ?
                    mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                      .filter(filterEvent => filterEvent.table.indexOf(2) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="primary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                  {mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                    .filter(filterEvent => filterEvent.table.indexOf(3) !== -1).length > 0
                    ?
                    mergeBookingsAndEvents(events, bookings).filter(event => changeFormatOfTime(event.hour) - 0.1 < hour && changeFormatOfTime(event.hour) + 0.1 + event.duration > hour)
                      .filter(filterEvent => filterEvent.table.indexOf(3) !== -1).map(filterEvent => (
                        <TableCell align='center' key={filterEvent.id}>
                          {filterEvent.type  === 'event'
                            ?
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${filterEvent.id}`} color="primary">{`Event ${filterEvent.id}`}</Button>
                            :
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${filterEvent.id}`} color="primary">{`Booking ${filterEvent.id}`}</Button>
                          }
                        </TableCell>
                      ))
                    :
                    <TableCell align='center'>---</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h2>Tables View</h2>
    </div>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
