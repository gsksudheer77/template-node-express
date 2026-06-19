import express from 'express';

const app = express();
app.use(express.json());

// 👋 Welcome! Add your routes below.
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

export default app;
