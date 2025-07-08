require('dotenv').config();
const express = require('express');
const addRoutes = require('./src/routes/addRoutes');
const coursesRoutes = require('./src/routes/coursesRoutes');
const app = express();
const errorHandler = require('./src/middlewares/errorHandler');

app.use(express.json());

app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
