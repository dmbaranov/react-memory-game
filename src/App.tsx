import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import routes from '@/routes';
import GlobalStyles from '@/styles';
import { AppState } from '@/reducers';
import { makeSelectSettings } from '@/selectors/settings';

interface IAppProps extends RouteComponentProps {
  settings: any;
}

class App extends Component<IAppProps, any> {
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

const mapStateToProps = () => {
  const getSettings = makeSelectSettings();

  return (state: AppState) => ({
    settings: getSettings(state)
  });
};

export default withRouter(connect(mapStateToProps)(App));
