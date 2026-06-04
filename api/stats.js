const { sendJson, sendError } = require('../server/env');
const { fetchSolPriceUsd } = require('../server/price');
const { attachPrice, stakingStats } = require('../server/staking');

module.exports = async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
    const wallet = url.searchParams.get('wallet') || '';
    const stats = await stakingStats(wallet);
    await attachPrice(stats, fetchSolPriceUsd);
    sendJson(res, 200, stats);
  } catch (error) {
    sendError(res, error);
  }
};
