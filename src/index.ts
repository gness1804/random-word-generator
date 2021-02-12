import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
  });
  res.json({ message: 'Hello world' });
});

app.listen(8080, () => {
  /* eslint-disable-next-line no-console */
  console.info('Server running on port 8080.');
});


