import cors from 'cors';
import express, { Request, Response } from 'express';
import 'dotenv/config';

import getScriptResults from './utils/getScriptResults';
import setupNewDay from './utils/setupNewDay';

const app = express();
app.use(cors());
app.use(express.json());

function handleGetScriptResults(req: Request, res: Response) {
    const { year, day, scriptNumber } = req.params;

    if (scriptNumber !== '01' && scriptNumber !== '02') {
        throw new Error('Wrong script number, should be 01 or 02');
    }

    const results = getScriptResults(year, day, scriptNumber);
    console.log('DEBUG - Log results from handleGetScriptResults', results);
    res.json(results);
}

function handlePostTodaySetup(req: Request, res: Response) {
    const results = setupNewDay();
    console.log('DEBUG - Log results from handlePostTodaySetup', results);
    res.json(results);
}

app.get('/api/:year/:day/:scriptNumber', handleGetScriptResults);

app.post('/api/setup/today', handlePostTodaySetup);

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend !' });
});

app.get('/api/message_2', (req, res) => {
    res.json({ message: 'Plop.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
