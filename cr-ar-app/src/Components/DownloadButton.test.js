import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DownloadButton from './DownloadButton';

test('DownloadButton component renders correctly', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<DownloadButton onClick={onClickMock} />);
  
  const button = getByText('Download');

  // Test button click
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
