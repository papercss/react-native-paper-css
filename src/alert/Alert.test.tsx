import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native';
import Alert from './Alert';

describe('Alert', () => {
  const message = 'This is a message';
  test('renders the correct message', async () => {
    const { queryByText, unmount } = render(
      <Alert alertType="primary">{message}</Alert>
    );
    await waitFor(() => {
      expect(queryByText(message)).toBeTruthy();
      unmount();
    });
  });

  test('render close button when enabled', async () => {
    const { queryByText, unmount } = render(
      <Alert close alertType="primary">
        {message}
      </Alert>
    );
    await waitFor(() => {
      expect(queryByText('X')).toBeTruthy();
      unmount();
    });
  });

  test('will not render close button when disabled', async () => {
    const { queryByText, unmount } = render(
      <Alert alertType="primary">{message}</Alert>
    );
    await waitFor(() => {
      expect(queryByText('X')).toBeFalsy();
      unmount();
    });
  });
  test('will not be visible when close button is pressed', async () => {
    const { queryByText, unmount } = render(
      <Alert close alertType="primary">
        {message}
      </Alert>
    );
    await waitFor(() => {
      const close = queryByText('X');
      fireEvent(close, 'press');
      expect(queryByText(message)).toBeFalsy();
      unmount();
    });
  });
});
