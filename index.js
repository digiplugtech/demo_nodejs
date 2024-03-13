import express from 'express';
import cors from 'cors'

const app = express();
const port =5000;

// apply middleware for posting the data
app.use(express.json());

// to prevent from cors error
app.use(cors())

app.get('/', (req, res) => {
  res.send(`Hello from backend index.js and port number ${port}  Harshit Jajori  `);
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}  Harshit Jajori `);
});
