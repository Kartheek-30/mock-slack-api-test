const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Mock Slack API running at http://localhost:${PORT}`);
});