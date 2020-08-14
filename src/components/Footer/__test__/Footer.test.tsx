import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Footer from '../';

const wrapper = () => render(<Footer />);

it('Footer Component', async () => {
  const { container } = wrapper();

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o copyright', async () => {
  wrapper();

  expect(screen.getByText(/Brunoflix, Inc/i)).toBeInTheDocument();
});
