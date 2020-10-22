import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Notification } from '.';
import notifications from '../../assets/json/notifications.json';

interface NotificationMovieProps {
  img: string;
  title: string;
  movie: string;
  days: string;
}
interface NotificationProps {
  count?: number;
  movies?: Array<NotificationMovieProps>;
}

const wrapper = ({ count, movies }: NotificationProps) =>
  render(<Notification count={count} movies={movies} />);

it('Notification Component', async () => {
  const { container } = wrapper({ count: 4 });

  expect(await axe(container)).toHaveNoViolations();
});

it('Show badget if have notification', async () => {
  wrapper({ count: 4 });

  expect(screen.getByText(/4/i)).toBeInTheDocument();
});

it("Do not Show badget if don't have notification", async () => {
  wrapper({});

  expect(screen.queryByText('4')).toBeNull();
});

it('Render notification movies', async () => {
  wrapper({ count: 3, movies: notifications });

  expect(screen.queryByText('3')).toBeInTheDocument();
});
