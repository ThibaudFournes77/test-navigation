import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { HomeScreen } from '.';
import React from 'react';

describe('Testing HomeScreen', () => {
  it(
    'should take user to Screen1 when go-to-screen1 button is pressed / should succeed',
    async () => {
      const navigate = jest.fn();
      const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />);
      fireEvent.press(getByTestId('go-to-screen1-btn'));
      waitFor(() => expect(getByTestId('screen1')).toBeTruthy());
    },
  );

  it(
    'should take user to Screen1 when go-to-screen1 button is pressed / should fail',
    async () => {
      const navigate = jest.fn();
      const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />);
      fireEvent.press(getByTestId('go-to-screen1-btn'));
      waitFor(() => expect(getByTestId('go-to-screen1-btn')).toBeTruthy());
    },
  );
});
