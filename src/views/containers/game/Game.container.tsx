import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '@/views/components/layout';
import Field from '@/views/components/field';
import { makeSelectSettings } from '@/core/settings/selectors';
import { makeSelectGameOver } from '@/core/game/selectors';
import { executeGameOver } from '@/core/game/actions';
import { AppState } from '@/core/reducer';
import { IFieldGameData } from '@/views/components/field/types';
import { IProps, IState } from './types';

class Game extends Component<IProps, IState> {
  state = {
    startTime: 0
  };

  handleGameStart = (time: number) => {
    this.setState({
      startTime: time
    });
  };

  handleGameOver = (gameData: IFieldGameData) => {
    const now = new Date().getTime();
    const playTime = Math.floor((now - this.state.startTime) / 1000);

    setTimeout(() => {
      this.props.executeGameOver({
        playTime,
        ...gameData
      });
    }, 750);
  };

  render() {
    const { settings, gameOver } = this.props;

    if (gameOver) return <Redirect to="/over" />;
    if (!settings.name) return <Redirect to="/" />;

    return (
      <>
        <Layout vPadding={100} hPadding={100}>
          <Field
            difficulty={settings.difficulty}
            onGameStarted={this.handleGameStart}
            onGameOver={this.handleGameOver}
          />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = () => {
  const getSettings = makeSelectSettings();
  const getGameOver = makeSelectGameOver();

  return (state: AppState) => ({
    settings: getSettings(state),
    gameOver: getGameOver(state)
  });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  executeGameOver: bindActionCreators(executeGameOver, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game as any);
