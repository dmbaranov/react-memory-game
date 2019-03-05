import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '@/views/components/layout';
import Field from '@/views/components/field';
import { makeSelectSettings } from '@/core/settings/selectors';
import { AppState } from '@/core/reducer';
import { IProps } from './types';

class Game extends Component<IProps, any> {
  render() {
    const { settings } = this.props;
    return (
      <Layout>
        <Field difficulty={settings.difficulty} />
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

export default connect(mapStateToProps)(Game as any);
