const express = require('express');
const mongoose = require('mongoose');
const institutionRoutes = require('./routes/institutions');
const programRoutes = require('./routes/programs');

const cors = require('cors')

const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// DB config
const db = require('./config/db');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Bodyparser middleware
app.use(express.json());

// Routes
app.use('/api/institutions', institutionRoutes);
app.use('/api/programs', programRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
