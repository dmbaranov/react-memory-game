import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '@/core/routes';
import GlobalStyles from './styles';

class App extends Component<any, any> {
  renderRoutes() {
    return routes.map((route: any) => <Route key={route.path} {...route} />);
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Switch>{this.renderRoutes()}</Switch>
      </>
    );
  }
}

export default App;
