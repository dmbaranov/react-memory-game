import React from 'react';
import { render, fireEvent, cleanup, act } from 'react-testing-library';
import Card from '../Card.component';

afterEach(cleanup);

const setup = (
  { index, isOpened, isVisible, isBusy } = {
    index: 0,
    isOpened: false,
    isVisible: true,
    isBusy: false
  }
) => {
  const onClick = jest.fn();
  let props = {
    card: {
      value: 1,
      color: 'red',
      id: 123,
      solved: false
    },
    index,
    isOpened,
    isVisible,
    isBusy,
    onClick
  };

  const utils = render(<Card {...props} />);

  return {
    onClick,
    props,
    ...utils
  };
};

describe('Card tests', () => {
  jest.useFakeTimers();

  it('Should render back side by default', () => {
    const { getByText } = setup();

    expect(getByText('?')).not.toBeNull();
  });

  it('Should render front on click', () => {
    const { getByTestId, getByText, onClick } = setup();

    act(() => {
      fireEvent.click(getByTestId('wrapper'));
      jest.runOnlyPendingTimers();
    });

    expect(onClick).toHaveBeenCalled();
    expect(getByText('1')).not.toBeNull();
  });

  it('Should render front if prop was passed', () => {
    const { getByText } = setup({ isOpened: true });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(getByText('1')).not.toBeNull();
  });
});
