import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '@/views/components/layout';
import Field from '@/views/components/field';
import { makeSelectSettings } from '@/core/settings/selectors';
import { executeGameOver } from '@/core/game/actions';
import { AppState } from '@/core/reducer';
import { IProps, IState } from './types';

class Game extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      startTime: 0
    };
  }

  handleGameStart = (time: number) => {
    this.setState({
      startTime: time
    });
  };

  handleGameOver = (gameData: any) => {
    const now = new Date().getTime();
    const playTime = Math.floor((now - this.state.startTime) / 1000);

    this.props.executeGameOver({
      playTime,
      ...gameData
    });
  };

  render() {
    const { settings } = this.props;
    return (
      <Layout>
        <Field
          difficulty={settings.difficulty}
          onGameStarted={this.handleGameStart}
          onGameOver={this.handleGameOver}
        />
      </Layout>
    );
  }
}

const mapStateToProps = () => {
  const getSettings = makeSelectSettings();

  return (state: AppState) => ({
    settings: getSettings(state)
  });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  executeGameOver: bindActionCreators(executeGameOver, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game as any);
