import express from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import routes from './server/routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, error => {
  if (error) {
    return console.log('error');
  }

  console.log(`server listening on port ${PORT}`);
});

export default app;
