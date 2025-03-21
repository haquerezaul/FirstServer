import { configDotenv } from 'dotenv';
import express from 'express';

configDotenv(); // Load environment variables

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
}
);

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        question: 'What is the object-oriented way to get wealthy?',
        answer: 'Inheritance',
      },
      {
        id: 2,
        question: 'How do you comfort a JavaScript bug?',
        answer: 'You console it',
      },
      {
        id: 3,
        question: 'What is the programmer’s favourite place in the house?',
        answer: 'The API',
      },
    ];
    res.json(jokes);
    } );



app.listen(process.env.PORT, () => {    
    console.log(`Server is running on port ${process.env.PORT}`);
  }
  
);