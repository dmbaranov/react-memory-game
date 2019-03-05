import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GameDifficulty } from '@/core/settings/types';
import { SettingsFormStyles, SubmitButton, RadioGroup } from './styles';
import { IProps } from './types';

const SettingsForm: React.FC<IProps> = ({ onSubmit }) => {
  const [settingsSaved, saveSettings] = useState(false);
  const [form, updateForm] = useState({
    name: '',
    difficulty: 'medium' as GameDifficulty
  });

  const updateFormState = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    updateForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    saveSettings(true);
  };

  if (settingsSaved) {
    return <Redirect to="/game" />;
  }

  return (
    <SettingsFormStyles>
      <form onSubmit={handleFormSubmit}>
        <TextField
          data-testid="nameInput"
          label="Name"
          name="name"
          value={form.name}
          onChange={updateFormState}
        />
        <RadioGroup
          name="difficulty"
          value={form.difficulty}
          onChange={updateFormState}
        >
          <FormControlLabel value="easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        </RadioGroup>
        <SubmitButton
          type="submit"
          variant="contained"
          data-testid="submitButton"
          disabled={form.name.length === 0}
        >
          Start
        </SubmitButton>
      </form>
    </SettingsFormStyles>
  );
};

export default SettingsForm;
