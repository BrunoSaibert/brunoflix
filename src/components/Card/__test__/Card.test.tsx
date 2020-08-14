import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import Card from '../';

interface CardProps {
  orientation: 'vertical' | 'horizontal';
}

const wrapper = ({ orientation }: CardProps) =>
  render(<Card bgImage="" title="Card title" orientation={orientation} />);

it('Card Component', async () => {
  const { container } = wrapper({ orientation: 'horizontal' });

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica o conteúdo', async () => {
  wrapper({ orientation: 'horizontal' });

  expect(screen.getByText(/Card title/i)).toBeInTheDocument();
});

it('Verifica orientação vertical', async () => {
  wrapper({ orientation: 'vertical' });
});
