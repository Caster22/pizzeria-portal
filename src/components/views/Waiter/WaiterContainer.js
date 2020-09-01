import { connect } from 'react-redux';
import Waiter from './Waiter';
import {getAll, fetchFromAPI, getLoadingState, sendTableStatToAPI} from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  sendTableStatus: (id, status) => dispatch(sendTableStatToAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
