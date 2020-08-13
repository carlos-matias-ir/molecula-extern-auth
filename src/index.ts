import routes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json())
app.use('/api', routes);

app.listen(3000, async () => {
  console.log('Server ready!')
  const mongoConnection = await mongoose.connect('mongodb://appuser:Egg6Njsr7WhjKpPk@ds037067.mlab.com:37067/vmd');
  console.log('Database ready!')
  
  console.log('Listening on port 3003')
})
