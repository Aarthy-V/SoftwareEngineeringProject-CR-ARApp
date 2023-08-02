import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar component should render correctly', () => {
  const onSearchMock = jest.fn();
  const placeholderText = 'Enter search term';

  const { getByPlaceholderText, getByRole } = render(
    <SearchBar onSearch={onSearchMock} name={placeholderText} />
  );

  const inputElement = getByPlaceholderText(placeholderText);
  const buttonElement = getByRole('button');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('SearchBar component should call onSearch when submitted', () => {
  const onSearchMock = jest.fn();

  const { getByRole } = render(<SearchBar onSearch={onSearchMock} name="" />);
  const buttonElement = getByRole('button');

  fireEvent.click(buttonElement);

  expect(onSearchMock).toHaveBeenCalled();
});