const blames = require('../blames.json');

if (
  !Array.isArray(blames) ||
  blames.length === 0 ||
  blames.some((blame) => typeof blame !== 'string' || blame.trim() === '') ||
  new Set(blames).size !== blames.length
) {
  throw new Error('blames.json must contain unique, non-empty strings.');
}

function getRandomBlame() {
  return blames[Math.floor(Math.random() * blames.length)];
}

module.exports = { blames, getRandomBlame };
