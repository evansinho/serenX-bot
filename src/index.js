import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

dotenv.config();
const Database = process.env.DATABASE;

const app = express();
const port = process.env.PORT || 3000;

// db config
mongoose.connect(Database, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(() => console.log( 'Database Connected' ))
  .catch(err => console.log( err ));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome'})
})

app.use('/api', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
