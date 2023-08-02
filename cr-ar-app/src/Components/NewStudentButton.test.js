import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewStudentButton from './NewStudentButton';

test('NewStudentButton component renders correctly', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<NewStudentButton onClick={onClickMock} />);
  
  const button = getByText('New Student');

  // Test button click
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
