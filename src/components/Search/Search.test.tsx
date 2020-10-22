import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Search } from '.';

const wrapper = (placeHolder?: string) =>
  render(<Search placeHolder={placeHolder} />);

it('Search Component', async () => {
  const { container } = wrapper('Titles, people, genres');

  expect(await axe(container)).toHaveNoViolations();
});

it('Should render placeholder ', async () => {
  wrapper('Titles, people, genres');

  expect(
    screen.getByPlaceholderText(/Titles, people, genres/),
  ).toBeInTheDocument();
});
