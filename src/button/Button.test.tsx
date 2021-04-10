import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native';
import Button from './Button';
// import Colors from '../../constants/Colors';

describe('Button', () => {
  test('render title properly', async () => {
    const title = 'PaperCSS Button';
    const { queryByText, unmount } = render(<Button>{title}</Button>);

    await waitFor(() => {
      expect(queryByText(title)).toBeTruthy();
      unmount();
    });
  });

  test('invoke the right function when pressed', async () => {
    const title = 'PaperCSS Button';
    const handlePress = jest.fn();
    const { queryByText, unmount } = render(
      <Button onPress={handlePress}>{title}</Button>
    );
    await waitFor(() => {
      const button = queryByText(title);
      fireEvent(button, 'press');
      expect(handlePress).toHaveBeenCalled();
      unmount();
    });
  });

  test('render disabled properly', async () => {
    const title = 'PaperCSS Button';
    const handlePress = jest.fn();
    const { queryByText, unmount } = render(
      <Button disabled onPress={handlePress}>
        {title}
      </Button>
    );
    await waitFor(() => {
      const button = queryByText(title);
      fireEvent(button, 'press');
      expect(handlePress).not.toHaveBeenCalled();
      unmount();
    });
  });
});
