import express from 'express';
import usersRouter from './routes/users.router.js';

const app = express()
const port = 3030

app.use(express.urlencoded ({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', usersRouter)

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}/`)
})