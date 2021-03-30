import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native';
import HeaderText, { HeaderSize } from '../../components/headerText/HeaderText';
import Colors from '../../constants/Colors';
import Header from '../../constants/HeaderSize';

describe('HeaderText', () => {
  test('renders children properly', async () => {
    const renderedText = 'deafult text';
    const { queryByText, unmount } = render(
      <HeaderText>{renderedText}</HeaderText>
    );

    await waitFor(() => {
      expect(queryByText(renderedText)).toBeTruthy();
      unmount();
    });
  });

  test('renders the right default color and font-family', async () => {
    const { queryByText, unmount } = render(
      <HeaderText>{'Paper CSS'}</HeaderText>
    );
    await waitFor(() => {
      expect(queryByText('Paper CSS')).toHaveStyle({
        color: Colors.primary,
        fontFamily: 'Patrick Hand SC',
        fontSize: 24,
      });
      unmount();
    });
  });

  describe('renders header', () => {
    const colorPropSelections: HeaderSize[] = [
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
    ];

    colorPropSelections.forEach(async (selection) => {
      test(`with the right size for ${selection}`, async () => {
        const { queryByText, unmount } = render(
          <HeaderText headerSize={selection}>{'Paper CSS'}</HeaderText>
        );
        await waitFor(() => {
          expect(queryByText('Paper CSS')).toHaveStyle({
            fontSize: Header[selection],
          });
          unmount();
        });
      });
    });
  });
});
