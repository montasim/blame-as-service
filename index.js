const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { getRandomBlame } = require('./lib/blames');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Trust only a known number of reverse proxies. Direct deployments stay on
// Express's safer default and ignore client-supplied forwarding headers.
if (process.env.TRUST_PROXY_HOPS !== undefined) {
  const trustProxyHops = Number(process.env.TRUST_PROXY_HOPS);

  if (!Number.isInteger(trustProxyHops) || trustProxyHops < 0) {
    throw new Error('TRUST_PROXY_HOPS must be a non-negative integer.');
  }

  app.set('trust proxy', trustProxyHops);
}

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  message: { error: "Too many requests, please try again later. (120 reqs/min/IP)" }
});

app.use(limiter);

// Random blame endpoint
app.get('/blame', (req, res) => {
  res.json({ blame: getRandomBlame() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Blame-as-a-Service is running on port ${PORT}`);
});
