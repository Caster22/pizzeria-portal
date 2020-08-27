import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Event/Events';
import Order from './components/views/Order/Order';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dashboard from './components/views/Home/Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/Dashboard'} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/Events/:id'} component={Events} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/Order/:id'} component={Order} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
