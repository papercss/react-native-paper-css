import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native';
import Text, { TextColors } from '../../components/text/Text';
import Colors from '../../constants/Colors';

describe('Text', () => {
  test('renders children properly', async () => {
    const renderedText = 'deafult text';
    const { queryByText, unmount } = render(<Text>{renderedText}</Text>);

    await waitFor(() => {
      expect(queryByText(renderedText)).toBeTruthy();
      unmount();
    });
  });

  test('renders the right default font size and color', async () => {
    const { queryByText, unmount } = render(<Text>Paper CSS</Text>);
    await waitFor(() => {
      expect(queryByText('Paper CSS')).toHaveStyle({
        fontSize: 16,
        color: Colors.primary,
        fontFamily: 'Neucha_400Regular',
      });
      unmount();
    });
  });

  const colorPropSelections: TextColors[] = [
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'muted',
  ];

  colorPropSelections.forEach(async (selection) => {
    test(`renders the right color for ${selection}`, async () => {
      const { queryByText, unmount } = render(
        <Text color={selection}>Paper CSS</Text>
      );
      await waitFor(() => {
        expect(queryByText('Paper CSS')).toHaveStyle({
          color: Colors[selection],
        });
        unmount();
      });
    });
  });

  test('renders with custom style', async () => {
    const customStyle = {
      fontSize: 50,
      color: 'red',
    };

    const { queryByText, unmount } = render(
      <Text style={customStyle}>Paper CSS</Text>
    );

    await waitFor(() => {
      expect(queryByText('Paper CSS')).toHaveStyle(customStyle);
      unmount();
    });
  });

});
