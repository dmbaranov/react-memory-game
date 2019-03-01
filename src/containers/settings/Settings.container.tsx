import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SettingsForm from '@/components/settings-form';

class Settings extends Component<any, any> {
  render() {
    return (
      <>
        <div>Settings container</div>
        <SettingsForm />
        <Link to="/game">Start</Link>
      </>
    );
  }
}

export default Settings;
