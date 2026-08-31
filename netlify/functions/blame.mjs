import blameService from '../../lib/blames.js';

const { getRandomBlame } = blameService;

export default async () => Response.json(
  { blame: getRandomBlame() },
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  },
);

export const config = {
  path: ['/', '/blame'],
  method: 'GET',
  rateLimit: {
    windowLimit: 120,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
};
