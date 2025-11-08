const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';
const ENV_COLOR = process.env.ENV_COLOR || 'Blue';

app.use(express.static(path.join(__dirname, 'public')))

app.get('/info', (_req, res) => {
  res.json({
    envColor: ENV_COLOR,
    appVersion: APP_VERSION,
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${ENV_COLOR}) v${APP_VERSION}`);
});