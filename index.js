require('dotenv').config();
const express = require('express');
const pool = require('./src/config/db');
const addRoutes = require('./src/routes/addRoutes');
const coursesRoutes = require('./src/routes/coursesRoutes');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');
const swaggerSpec = require('./src/config/swagger');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

// console.log(JSON.stringify(swaggerSpec, null, 2));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(errorHandler);
