require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(trackRoutes);

// Before starting the app fill in the <password> below
const mongoUri =
  'mongodb+srv://Yevhenii:ZaUbFjIdFJcv1srH@cluster0.dq9ku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', () => {
  console.log('Error connection to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
