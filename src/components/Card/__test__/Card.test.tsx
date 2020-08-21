import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';

import Card from '../';

interface CardProps {
  orientation: 'vertical' | 'horizontal';
}

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const wrapper = ({ orientation }: CardProps) =>
  render(
    <MemoryRouter>
      <Card
        bgImage=""
        title="Card title"
        cardId={123}
        type="movie"
        orientation={orientation}
      />
    </MemoryRouter>,
  );

it('Card Component', async () => {
  const { container } = wrapper({ orientation: 'horizontal' });

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o conteúdo', async () => {
  wrapper({ orientation: 'horizontal' });

  expect(screen.getByText(/Card title/i)).toBeInTheDocument();
});

it('Orientação vertical', async () => {
  wrapper({ orientation: 'vertical' });

  expect(screen.getByText(/Card title/i)).toBeInTheDocument();
});

it('Click', async () => {
  wrapper({ orientation: 'horizontal' });

  fireEvent.click(screen.getByText(/Card title/i));

  expect(mockHistoryPush).toHaveBeenCalledWith('/watch/movie/123');
});
