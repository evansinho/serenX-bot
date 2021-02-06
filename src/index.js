import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello'})
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
