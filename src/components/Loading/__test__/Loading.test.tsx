import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Loading from '../';

interface LoadingProps {
  qtdCards: number;
}

afterEach(() => {
  jest.resetAllMocks();
});

const wrapper = ({ qtdCards }: LoadingProps) =>
  render(<Loading qtdCards={qtdCards} />);

it('Loading Component', async () => {
  const { container } = wrapper({ qtdCards: 1 });

  expect(await axe(container)).toHaveNoViolations();
});

it('Verifica quantidade de cards', async () => {
  const { container } = wrapper({ qtdCards: 1 });

  expect(container.querySelector('#loading-2')).toBeInTheDocument();
  expect(container.querySelector('#loading-3')).not.toBeInTheDocument();
});
