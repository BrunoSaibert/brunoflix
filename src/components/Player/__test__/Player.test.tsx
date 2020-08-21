import React from 'react';
import { render, screen, wait } from '@testing-library/react';

import Player from '../';

interface PlayerProps {
  videoId: number;
  type: string;
}

const oldFetch = window.fetch;

beforeEach(() => {
  delete window.fetch;
  window.fetch = jest.fn();

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      results: [
        {
          success: true,
          key: 123,
        },
      ],
    }),
  });
});

afterEach(() => {
  window.fetch = oldFetch;

  jest.resetAllMocks();
});

const wrapper = ({ videoId, type }: PlayerProps) =>
  render(<Player type={type} videoId={videoId} />);

it('Player iframe', async () => {
  wrapper({ type: 'tv', videoId: 1 });

  await wait(() => {
    expect(screen.getByTestId(/player/i)).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/123?autoplay=1&mute=0',
    );
  });
});
