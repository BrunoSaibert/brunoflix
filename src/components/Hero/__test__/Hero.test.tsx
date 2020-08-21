import React from 'react';
import { render, screen, wait, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';

import Hero from '../';

interface HeroProps {
  type: string;
  id: number;
}

const oldFetch = window.fetch;

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeEach(() => {
  delete window.fetch;
  window.fetch = jest.fn();

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      success: true,
      title: 'Hero title',
      release_date: '2017-12-01',
      number_of_seasons: 2,
      overview: 'Hero overview',
      backdrop_path: '/teste',
    }),
  });
});

afterEach(() => {
  window.fetch = oldFetch;

  jest.resetAllMocks();
});

const wrapper = ({ type, id }: HeroProps) =>
  render(
    <MemoryRouter>
      <Hero type={type} id={id} />
    </MemoryRouter>,
  );

it('Hero Component', async () => {
  const { container } = wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o conteúdo', async () => {
  wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  await wait(() => {
    expect(screen.getByText(/Hero title/i)).toBeInTheDocument();
    expect(screen.getByText(/2017/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Temporadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Hero overview/i)).toBeInTheDocument();
  });
});

it('Click "Assistir"', async () => {
  wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  await wait(() => {
    expect(screen.getByTestId(/Assistir/i)).toHaveAttribute(
      'href',
      '/watch/tv/1',
    );
  });
});

it('Click "Mais informações"', async () => {
  wrapper({ type: 'tv', id: 1 });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  await wait(() => {
    expect(screen.getByTestId(/Informacoes/i)).toHaveAttribute(
      'href',
      '/details/tv/1',
    );
  });
});
