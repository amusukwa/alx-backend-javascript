import express from 'express';
import routes from './routes';

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Attach the database file path to the request object
app.use((req, res, next) => {
  req.dbFile = process.argv[2]; // Assuming the database filename is passed as a command line argument
  next();
});

// Use the routes defined in the routes directory
app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
