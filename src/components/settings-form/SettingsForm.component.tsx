import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SettingsForm: React.FC<any> = () => {
  const [form, updateForm] = useState({
    name: '',
    difficulty: 'medium'
  });

  function updateFormState(e: React.ChangeEvent<HTMLInputElement | any>) {
    updateForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted', form);
  }

  return (
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
    </form>
  );
};

export default SettingsForm;
