import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello'})
})

app.use('/api', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
