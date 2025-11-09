import express from 'express'
import dotenv from 'dotenv'

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.json({
        message: "Locafind Backend Server is running",
        timestamp: new Date().toISOString(),
        status: 'OK'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'Heath',
        server: 'LocaFind Backend',
        time: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port 4000 ");
})