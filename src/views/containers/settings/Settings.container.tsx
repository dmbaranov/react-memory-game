import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Layout from '@/views/components/layout';
import SettingsForm from '@/views/components/settings-form';
import { saveSettings } from '@/core/settings/actions';
import { IGameSettings } from '@/core/settings/types';
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
