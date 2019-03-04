import '@/core/utils/setup-tests';
import React from 'react';
import { mount } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SettingsForm from '../SettingsForm.component';
import { SubmitButton } from '../styles';

describe('SettingsForm tests', () => {
  let wrapper;
  let onSubmit;

  beforeAll(() => {
    onSubmit = jest.fn();
    wrapper = mount(<SettingsForm onSubmit={onSubmit} />);
  });

  it('Submit button should be disabled if name not presented', () => {
    expect(wrapper.find(SubmitButton)).toBeDisabled();
  });

  it('Should submit form with provided name and difficulty', () => {
    wrapper
      .find(TextField)
      .find('input')
      .simulate('change', {
        target: {
          name: 'name',
          value: 'Andrew'
        }
      });

    wrapper
      .find(FormControlLabel)
      .find('input[value="hard"]')
      .simulate('change', {
        target: {
          name: 'difficulty',
          value: 'hard'
        }
      });

    wrapper.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Andrew',
      difficulty: 'hard'
    });
  });
});
