import React from 'react';
import styles from './Dashboard.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', status: 'Login'},
  {id: '2', status: 'Tables'},
  {id: '3', status: 'Waiter'},
  {id: '4', status: 'Kitchen'},
];

const renderActions = status => {
  switch (status) {
    case 'Login':
      return (
        <Button variant="contained" color="primary"><Link color="inherit" href='/panel/login'>Login</Link></Button>
      );
    case 'Tables':
      return (
        <Button variant="contained" color="primary"><Link color="inherit" href='/panel/tables'>Tables</Link></Button>
      );
    case 'Waiter':
      return (
        <Button variant="contained" color="primary"><Link color="inherit" href='/panel/waiter'>Waiter</Link></Button>
      );
    case 'Kitchen':
      return (
        <Button variant="contained" color="primary"><Link color="inherit" href='/panel/kitchen'>Kitchen</Link></Button>
      );
    default:
      return null;
  }
};

const Home = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Page type:</TableCell>
          <TableCell>Fast travel!</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Home;
