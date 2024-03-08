import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'))
app.use(bodyParser.json());

// Some cors config
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/issues', async (req, res) => {
    const fileContent = await fs.readFile('./data/get_issues.json');
    setTimeout(() => {
        res.status(200).send(fileContent)
    }, 10)
});

app.post('/issue', async (req, res) => {
    const fileContent = await fs.readFile('./data/success.json');

    setTimeout(() => {
        res.status(200).send(fileContent)
    }, 10)
});

app.delete('/issue', async (req, res) => {
    const fileContent = await fs.readFile('./data/success.json');

    setTimeout(() => {
        res.status(200).send(fileContent)
    }, 10)
});

app.listen(3000, 'localhost', () => {
    console.log("Server running in port: ", 3000)
})