import express = require('express');
import words = require('./words');

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const { maxWordLength = 6 } = req.query;
  const filteredWords = words.words
    .split(',')
    .filter((word: string) => word.length <= maxWordLength)
    .map((word) => word.toLowerCase());

  const randomIndex = Math.floor(
    Math.random() * (filteredWords.length - 0 + 1) + 0,
  );
  const word = filteredWords[randomIndex];

  res.header({
    'Access-Control-Allow-Origin': '*',
  });
  res.json({ word });
});

app.listen(process.env.PORT || 8080, () => {
  /* eslint-disable-next-line no-console */
  console.info('Server running on port 8080.');
});
