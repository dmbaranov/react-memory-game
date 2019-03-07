import React from 'react';
import { MemoryRouter, Redirect as MockRedirect } from 'react-router-dom';
import { render, act, fireEvent, cleanup } from 'react-testing-library';
import SettingsForm from '../SettingsForm.component';

jest.mock('react-router-dom', () => {
  const RouterMocks = jest.requireActual('react-router-dom');

  return {
    ...RouterMocks,
    Redirect: jest.fn().mockImplementation(() => {
      return <span>Redirect</span>;
    })
  };
});

const setup = () => {
  const onSubmit = jest.fn();

  const utils = render(
    <MemoryRouter>
      <SettingsForm onSubmit={onSubmit} />
    </MemoryRouter>
  );

  const submitButton = utils.getByText('Start');
  const nameInput = utils.getByTestId('nameInput');

  return {
    onSubmit,
    submitButton,
    nameInput,
    ...utils
  };
};

afterEach(() => {
  MockRedirect.mockClear();
  cleanup();
});

describe('SettingsForm test', () => {
  it('Button should be disabled if username is empty', () => {
    const { submitButton } = setup();
    expect(submitButton.parentNode.disabled).toBe(true);
  });

  it('Test click', () => {
    const { getByText, onSubmit, nameInput } = setup();

    act(() => {
      fireEvent.change(nameInput.querySelector('input'), {
        target: {
          name: 'name',
          value: 'qwe'
        }
      });
    });

    act(() => {
      fireEvent.click(getByText('Start'));
    });

    expect(onSubmit).toHaveBeenCalled();
    expect(getByText('Redirect')).not.toBeNull();
  });
});
