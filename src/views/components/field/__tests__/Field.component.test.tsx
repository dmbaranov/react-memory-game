import React from 'react';
import { render, act, fireEvent, cleanup } from 'react-testing-library';
import Field from '../Field.component';
import { generateField } from '../utils';

const setup = () => {
  const onGameOver = jest.fn();
  const onGameStarted = jest.fn();

  const props = {
    difficulty: 'easy' as any,
    onGameOver,
    onGameStarted
  };

  const utils = render(<Field {...props} />);

  return {
    onGameOver,
    onGameStarted,
    ...utils
  };
};

const generateMockField = ({ amount, solved, random }) => {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push({
      color: '#e53935',
      value: random ? i : 3,
      id: i,
      solved
    });
  }

  return result;
};

jest.mock('../utils', () => ({
  generateField: jest.fn()
}));

jest.useFakeTimers();

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);

// TODO: should probably mock Card component..
// TODO: figure out why timers work like a shit...

describe('Field tests', () => {
  it('Should render 12 cards', () => {
    generateField.mockImplementation(() => generateMockField({ amount: 12 }));

    const { getAllByText, onGameStarted } = setup();

    expect(getAllByText('?').length).toBe(12);
    expect(onGameStarted).toHaveBeenCalled();
  });

  it('Should call gameover when all the cells are solved', () => {
    generateField.mockImplementation(() =>
      generateMockField({ amount: 6, solved: true })
    );
    //
    const { onGameOver } = setup();

    expect(onGameOver).toHaveBeenCalledWith({ moves: 0 });
  });

  it('Should calculate amount of moves', () => {
    generateField.mockImplementation(() => generateMockField({ amount: 2 }));

    const { getByText, onGameOver } = setup();

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(onGameOver).toHaveBeenCalledWith({ moves: 1 });
  });

  it('Should hide card if it was clicked again', () => {
    generateField.mockImplementation(() =>
      generateMockField({ amount: 4, random: true })
    );

    const { getByText, getAllByText, debug } = setup();

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('?').length).toBe(3);

    act(() => {
      fireEvent.click(getByText('0'));
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('?').length).toBe(4);
  });

  it('Two opened cards with same value should be removed from the field', () => {
    generateField.mockImplementation(() => generateMockField({ amount: 4 }));

    const { getByText, getAllByText } = setup();

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(getAllByText('?').length).toBe(2);
  });

  it('Two opened cards with different values should remain on the field', () => {
    generateField.mockImplementation(() =>
      generateMockField({ amount: 4, random: true })
    );

    const { getByText, getAllByText } = setup();

    act(() => {
      fireEvent.click(getByText('?'));
    });

    act(() => {
      fireEvent.click(getByText('?'));
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(getAllByText('?').length).toBe(4);
  });

  it("Shouldn't open a new card if currently bust", () => {
    generateField.mockImplementation(() => generateMockField({ amount: 4 }));

    const { getByText, getAllByText } = setup();

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('?').length).toBe(2);

    act(() => {
      fireEvent.click(getByText('?'));
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('?').length).toBe(2);
  });
});
