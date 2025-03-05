import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT;

// Connect to DB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!)
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`Error connecting the database: ${error}`));

// Routes
// app.use('/api/exercise', exerciseRoutes);

// Error handling
// app.use((req, res, next) => {
// 	next(new CustomError(404, 'Endpoint not found'));
// });

// app.use(errorHandler);
