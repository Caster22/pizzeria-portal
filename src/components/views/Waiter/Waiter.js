import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

/*const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];*/


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    sendTableStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.any,
  };

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status, id) {
    const { sendTableStatus } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => sendTableStatus(id, 'thinking')}>
              thinking
            </Button>
            <Button onClick={() => sendTableStatus(id, 'new order')}>
              new order
            </Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => sendTableStatus(id, 'new order')}>
            new order
          </Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => sendTableStatus(id, 'prepared')}>
            prepared
          </Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => sendTableStatus(id, 'delivered')}>
            delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => sendTableStatus(id, 'paid')}>
            paid
          </Button>
        );
      case 'paid':
        return (
          <Button onClick={() => sendTableStatus(id, 'free')}>
            free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const {
      loading: { active, error },
      tables,
    } = this.props;
    console.log(tables);
    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <CircularProgress className={styles.loading}/>
          <span>Loading...</span>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={ Link } to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
