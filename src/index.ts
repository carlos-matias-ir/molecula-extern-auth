import routes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use('/api', routes);

app.listen(3003, async () => {
  console.log('Server ready!')

  let host = process.env.DB_HOST;
  let username = process.env.DB_USER;
  let password = process.env.DB_PASS;
  
  const mongoConnection = await mongoose.connect(`mongodb://${username}:${password}@${host}`);
  
  console.log('Database ready!')
  
  console.log('Listening on port 3003')
})
