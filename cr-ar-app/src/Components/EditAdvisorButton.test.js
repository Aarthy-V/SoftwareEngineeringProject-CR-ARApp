import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditAdvisorButton from './EditAdvisorButton';

test('EditAdvisor component renders correctly', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<EditAdvisorButton onClick={onClickMock} />);
  
  const button = getByText('Edit Advisor');

  // Test button click
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
