import React from 'react';
import { render, screen, wait, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';

import Slider from '../';

interface SliderProps {
  type: string;
  list: string;
  title: string;
  original?: boolean;
}

const oldFetch = window.fetch;

beforeEach(() => {
  delete window.fetch;
  window.fetch = jest.fn();

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      success: true,
      page: 1,
      results: [
        {
          id: 0,
          title: 'Card 0',
          overview: 'Overview Card 0',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
        {
          id: 1,
          title: 'Card 1',
          overview: 'Overview Card 1',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
        {
          id: 2,
          title: 'Card 2',
          overview: 'Overview Card 2',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
        {
          id: 3,
          name: 'Card 3',
          overview: 'Overview Card 3',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
        {
          id: 4,
          title: 'Card 4',
          overview: 'Overview Card 4',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
        {
          id: 5,
          name: 'Card 5',
          overview: 'Overview Card 5',
          backdrop_path: '/backdrop_path.jpg',
          poster_path: '/poster_path.jpg',
          release_date: '2020-01-01',
        },
      ],
    }),
  });
});

afterEach(() => {
  window.fetch = oldFetch;

  jest.resetAllMocks();
});

const wrapper = ({ type, list, title, original }: SliderProps) =>
  render(<Slider type={type} list={list} title={title} original={original} />);

it('Slider Component', async () => {
  const { container } = wrapper({
    type: 'type',
    list: 'list',
    title: 'Minha lista',
    original: false,
  });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  expect(await axe(container)).toHaveNoViolations();
});

it('Slider Component Original', async () => {
  const { container } = wrapper({
    type: 'type',
    list: 'list',
    title: 'Minha lista',
    original: true,
  });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o conteúdo', async () => {
  const { container } = wrapper({
    type: 'type',
    list: 'list',
    title: 'Meu Slider',
    original: false,
  });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  await wait(() => {
    expect(screen.getByText(/Meu Slider/i)).toBeInTheDocument();

    expect(screen.getByText(/card 0/i)).toBeInTheDocument();
    expect(screen.getByText(/card 1/i)).toBeInTheDocument();

    expect(container.querySelector('#previous-button')).toBeInTheDocument();
    expect(container.querySelector('#next-button')).toBeInTheDocument();
  });
});

it('Verifica os botões de navegação', async () => {
  jest.useFakeTimers();

  const { container } = wrapper({
    type: 'type',
    list: 'list',
    title: 'Meu Slider',
    original: false,
  });

  await wait(() => expect(screen.queryByTestId('loading')).toBeNull());

  window.innerWidth = 600;
  fireEvent(window, new Event('resize'));

  const previous = container.querySelector('#previous-button');
  const next = container.querySelector('#next-button');

  // Página 1
  await wait(() => {
    expect(previous).toBeDisabled();
    expect(next).not.toBeDisabled();
  });

  fireEvent.click(next);

  // Página 2
  jest.advanceTimersByTime(1000);

  await wait(() => {
    expect(previous).not.toBeDisabled();
    expect(next).not.toBeDisabled();
  });

  fireEvent.click(next);

  // Página 3
  jest.advanceTimersByTime(1000);

  await wait(() => {
    expect(previous).not.toBeDisabled();
    expect(next).toBeDisabled();
  });

  fireEvent.click(previous);

  // Página 2
  jest.advanceTimersByTime(1000);

  await wait(() => {
    expect(previous).not.toBeDisabled();
    expect(next).not.toBeDisabled();
  });

  fireEvent.click(previous);

  // Página 1
  jest.advanceTimersByTime(1000);

  await wait(() => {
    expect(previous).toBeDisabled();
    expect(next).not.toBeDisabled();
  });
});
