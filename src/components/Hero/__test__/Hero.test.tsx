import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import { axe } from 'jest-axe';

import Hero from '../';

interface HeroProps {
  type: string;
  id: number;
}

const oldFetch = window.fetch;

beforeEach(() => {
  delete window.fetch;
  window.fetch = jest.fn();

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      success: true,
      title: 'Card title',
      release_date: '2017-12-01',
      number_of_seasons: 2,
      overview: 'Card overview',
      backdrop_path: '/teste',
    }),
  });
});

afterEach(() => {
  window.fetch = oldFetch;

  jest.resetAllMocks();
});

const wrapper = ({ type, id }: HeroProps) =>
  render(<Hero type={type} id={id} />);

it('Hero Component', async () => {
  const { container } = wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o conteúdo', async () => {
  wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  await wait(() => {
    expect(screen.getByText(/Card title/i)).toBeInTheDocument();
    expect(screen.getByText(/2017/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Temporadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Card overview/i)).toBeInTheDocument();
  });
});
