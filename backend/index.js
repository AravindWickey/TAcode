import express from 'express';
import cors from 'cors'
import axios from 'axios'


const app = express();

app.use(cors());

app.get('/',async (req, res)=>{
    try {
        const jsonLink = 'https://jsonplaceholder.typicode.com/users';
        const response = await axios.get(jsonLink);
        const rawData = response.data;
        res.json(rawData);
    } catch (error) {
        console.error('Error fetching external data:', error.message);
        res.status(500).json({ error: 'Failed to fetch graph data' });
    }
})

app.listen(5001, ()=>{
console.log('Server running...')})