require('dotenv').config();
const express = require('express');
const addRoutes = require('./src/routes/addRoutes');
const coursesRoutes = require('./src/routes/coursesRoutes');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');
const swaggerSpec = require('./src/config/swagger');
const swaggerUI = require('swagger-ui-express');

app.use(express.json());

app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

app.use(errorHandler);

// console.log(JSON.stringify(swaggerSpec, null, 2));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
