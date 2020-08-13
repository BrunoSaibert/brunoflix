import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';

import { MemoryRouter } from 'react-router-dom';

import Header from '../';

const wrapper = (link = "/") => render(
  <MemoryRouter initialEntries={[link]} >
    <Header />
  </MemoryRouter>
);

it('Header Page', async () => {
  const { container } = wrapper();

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica os itens', async () => {
  wrapper();

  expect(screen.getByAltText(/Brunoflix/i)).toBeInTheDocument();
  expect(screen.getByText(/Início/i)).toBeInTheDocument();
  expect(screen.getByText(/Séries/i)).toBeInTheDocument();
  expect(screen.getByText(/Filmes/i)).toBeInTheDocument();
  expect(screen.getByText(/Mais recentes/i)).toBeInTheDocument();
  expect(screen.getByText(/Minha lista/i)).toBeInTheDocument();
});

it('Header alterar cor após evento de scroll', async () => {
  wrapper();

  window.pageYOffset = 50;

  fireEvent.scroll(window);
});

it('Verifica o link: Brunoflix Logo', async () => {
  wrapper();

  expect(screen.getByTestId(/Brunoflix Logo/i)).toHaveAttribute("href", '/');
});

const links = [
  {
    title: 'Início',
    url: '/'
  },
  {
    title: 'Séries',
    url: '/series'
  },
  {
    title: 'Filmes',
    url: '/movies'
  },
  {
    title: 'Mais recentes',
    url: '/latest'
  },
  {
    title: 'Minha lista',
    url: '/my-list'
  },
];

links.forEach(item => {
  it(`Verifica o link: ${item.title}`, async () => {
    wrapper(item.url);

    expect(screen.getByText(item.title)).toHaveAttribute("href", item.url);
  });
});