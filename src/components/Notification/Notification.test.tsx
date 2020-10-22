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
  movies?: Array<NotificationMovieProps>;
}

const wrapper = ({ movies }: NotificationProps) =>
  render(<Notification movies={movies} />);

it('Notification Component', async () => {
  const { container } = wrapper({ movies: notifications });

  expect(await axe(container)).toHaveNoViolations();
});

it('Show badget if have notification', async () => {
  wrapper({ movies: notifications });

  expect(screen.getByText(/3/i)).toBeInTheDocument();
});

it("Do not Show badget if don't have notification", async () => {
  wrapper({});

  expect(screen.queryByText('3')).toBeNull();
});

it('Render notification movies', async () => {
  wrapper({ movies: notifications });

  expect(screen.queryByText('3')).toBeInTheDocument();
});
