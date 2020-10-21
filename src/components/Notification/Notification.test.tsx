import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Notification } from '.';

const wrapper = (count?: number) => render(<Notification count={count} />);

it('Notification Component', async () => {
  const { container } = wrapper(4);

  expect(await axe(container)).toHaveNoViolations();
});

it('Show badget if have notification', async () => {
  wrapper(4);

  expect(screen.getByText(/4/i)).toBeInTheDocument();
});

it("Do not Show badget if don't have notification", async () => {
  wrapper();

  expect(screen.queryByText('4')).toBeNull();
});
