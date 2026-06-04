const { sendJson, sendError } = require('../server/env');
const { buildUserTransaction } = require('../server/staking');

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'Method not allowed' });
  }

  try {
    const body = await readBody(req);
    const tx = await buildUserTransaction(body.type, body.wallet, body.amount);
    sendJson(res, 200, {
      ok: true,
      transaction: tx.serialize({ requireAllSignatures: false, verifySignatures: false }).toString('base64')
    });
  } catch (error) {
    sendError(res, error);
  }
};
