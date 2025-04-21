import express from 'express';
import trigHandler from '../handlers/trigHandler';

const app = express();
const port = 3000;

app.use('/api', trigHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
