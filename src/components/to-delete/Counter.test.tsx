import React from 'react';
import { render, cleanup, act, fireEvent } from 'react-testing-library';
import Counter from './Counter';

const setup = (props?: any) => {
  const utils = render(<Counter {...props} />);
  const counterText = utils.getByTestId('counterText');
  const increaseBtn = utils.getByTestId('increaseBtn');
  const decreaseBtn = utils.getByTestId('decreaseBtn');

  return {
    counterText,
    increaseBtn,
    decreaseBtn,
    ...utils
  };
};

describe('Counter tests', () => {
  afterEach(cleanup);

  it('Counter renders without props', () => {
    const { counterText } = setup();

    expect(counterText.textContent).toBe('Counter: 0');
  });

  it('Counter renders with initialValue', () => {
    const { counterText } = setup({ initialValue: 5 });

    expect(counterText.textContent).toBe('Counter: 5');
  });

  it('Increase and decrease buttons work', () => {
    const { counterText, increaseBtn, decreaseBtn } = setup();

    act(() => {
      fireEvent.click(increaseBtn);
    });

    expect(counterText.textContent).toBe('Counter: 1');

    act(() => {
      fireEvent.click(decreaseBtn);
      fireEvent.click(decreaseBtn);
    });

    expect(counterText.textContent).toBe('Counter: -1');
  });
});
