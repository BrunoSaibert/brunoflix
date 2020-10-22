import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Login } from '.';

interface LoginProps {
  loggedIn: boolean;
}

const wrapper = ({ loggedIn }: LoginProps) =>
  render(<Login loggedIn={loggedIn} />);

it('Login Component', async () => {
  const { container } = wrapper({ loggedIn: true });

  expect(await axe(container)).toHaveNoViolations();
});
