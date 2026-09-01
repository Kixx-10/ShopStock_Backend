import dotenv from 'dotenv';
import app from './app';
import { connectDatabase } from './src/config/database';


dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  //  Establish database connection
  await connectDatabase();

  // Start the HTTP listener
  app.listen(PORT, () => {
    console.log(` Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
  });
};
startServer();
