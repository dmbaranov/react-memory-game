import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GameDifficulty } from '@/types/settings';
import { SettingsFormStyles, SubmitButton, RadioGroup } from './styles';
import { ISettingsFormComponentProps } from './types';

const SettingsForm: React.FC<ISettingsFormComponentProps> = ({ onSubmit }) => {
  const [form, updateForm] = useState({
    name: '',
    difficulty: 'medium' as GameDifficulty
  });

  function updateFormState(e: React.ChangeEvent<HTMLInputElement | any>) {
    updateForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <SettingsFormStyles>
      <form onSubmit={handleFormSubmit}>
        <TextField
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
        <SubmitButton type="submit" variant="contained">
          Start
        </SubmitButton>
      </form>
    </SettingsFormStyles>
  );
};

export default SettingsForm;
