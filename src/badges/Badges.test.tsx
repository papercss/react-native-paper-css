import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native';
import Badges from './Badges';

describe('Badges', () => {
  const num = 18;
  test('renders the correct message', async () => {
    const { queryByText, unmount } = render(<Badges>{num}</Badges>);
    await waitFor(() => {
      expect(queryByText(num.toString())).toBeTruthy();
      unmount();
    });
  });
});
