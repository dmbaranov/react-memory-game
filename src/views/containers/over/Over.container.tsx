import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '@/views/components/layout';
import { makeSelectSettings } from '@/core/settings/selectors';
import { makeSelectGameData, makeSelectGameOver } from '@/core/game/selectors';
import { AppState } from '@/core/reducer';
import { TextLine } from './styles';
import { IProps } from './types';

class Over extends React.Component<IProps> {
  render() {
    const { settings, gameData, gameOver } = this.props;

    if (!gameOver) return <Redirect to="/" />;

    return (
      <Layout direction="column">
        <TextLine large>Game Over...</TextLine>
        <TextLine>It was a good game, {settings.name}</TextLine>
        <TextLine>
          It took you only {gameData.moves} moves and {gameData.playTime}{' '}
          seconds to finish it!
        </TextLine>
      </Layout>
    );
  }
}

const mapStateToProps = () => {
  const getSettings = makeSelectSettings();
  const getGameData = makeSelectGameData();
  const getGameOver = makeSelectGameOver();

  return (state: AppState) => ({
    settings: getSettings(state),
    gameData: getGameData(state),
    gameOver: getGameOver(state)
  });
};

export default connect<any, IProps>(mapStateToProps)(Over);
