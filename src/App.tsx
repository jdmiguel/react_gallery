import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './helpers/Theme';
import { GlobalStyles } from './helpers/GlobalStyles';

import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailPage';
import PageError from './components/pages/ErrorPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route component={PageError} />
        </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
