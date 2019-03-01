import React from 'react';
import { render, cleanup, fireEvent, act } from 'react-testing-library';
import Timer from './Timer';

jest.useFakeTimers();

const setup = () => {
  const utils = render(<Timer />);
  const timerText = utils.getByTestId('timerText');
  const toggleButton = utils.getByTestId('toggleButton');
  const clearButton = utils.getByTestId('clearButton');

  return {
    timerText,
    toggleButton,
    clearButton,
    ...utils
  };
};

describe('Timer tests', () => {
  afterEach(cleanup);

  it('Timer should display correct initial text', () => {
    const { timerText } = setup();

    expect(timerText.textContent).toBe('Time: 0, False');
  });

  it('Timer should correctly handle toggle button', () => {
    const { timerText, toggleButton } = setup();

    act(() => {
      fireEvent.click(toggleButton);
      jest.runOnlyPendingTimers();
    });
    expect(timerText.textContent).toBe('Time: 1, True');

    act(() => {
      fireEvent.click(toggleButton);
    });
    expect(timerText.textContent).toBe('Time: 1, False');
  });

  it('Timer should correctly handle clear button', () => {
    const { timerText, toggleButton, clearButton } = setup();

    act(() => {
      fireEvent.click(toggleButton);
      jest.runOnlyPendingTimers();
      fireEvent.click(clearButton);
    });

    expect(timerText.textContent).toBe('Time: 0, False');
  });
});
