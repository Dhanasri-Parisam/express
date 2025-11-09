import express from 'express';

const app = express();
const port = 3000;

app.get('/get-route', (req, res) => {
  // logic related to get operation should be added here
  res.json({ response: 'This is the GET Route!' });
});

app.post('/post-route', (req, res) => {
  // logic related to post operation should be added here
  res.json({ response: 'This is the POST Route!' });
});

app.put('/put-route', (req, res) => {
  // logic related to put operation should be added here
  res.json({ response: 'This is the PUT Route!' });
});

app.delete('/delete-route', (req, res) => {
  // logic related to delete operation should be added here
  res.json({ response: 'This is the DELETE Route!' });
});

app.get('/unauthorized-route', (req, res) => {
  // logic related to unauthorized operation should be added here
  res.status(401).json({ response: 'This is the UNAUTHORIZED Route!' });
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
