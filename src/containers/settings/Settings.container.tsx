import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Layout from '@/components/layout';
import SettingsForm from '@/components/settings-form';
import { saveSettings } from '@/actions/settings';
import { IGameSettings } from '@/types/settings';
import { ISettingsProps } from './types';

class Settings extends Component<ISettingsProps, any> {
  handleFormSubmit = (settings: IGameSettings) => {
    this.props.saveSettings(settings);
  };

  render() {
    return (
      <Layout>
        <SettingsForm onSubmit={this.handleFormSubmit} />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  saveSettings: bindActionCreators(saveSettings, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Settings);
