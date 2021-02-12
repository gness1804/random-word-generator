import express = require('express');
import fs = require('fs');
import path = require('path');

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
  const file = path.join(__dirname, '../src/words.json');
  const words = await fs.promises.readFile(file, 'utf-8');
  const parsedWords: string[] = JSON.parse(words);
  const randomIndex = Math.floor(Math.random() * (parsedWords.length - 0 + 1) + 0);
  const word = parsedWords[randomIndex];

  res.header({
    'Access-Control-Allow-Origin': '*',
  });
  res.json({ word });
});

app.listen(process.env.PORT || 8080, () => {
  /* eslint-disable-next-line no-console */
  console.info('Server running on port 8080.');
});
