import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(8080, () => {
  console.info('Server running on port 8080.');
});


