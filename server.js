const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const viewRoutes = require('./controllers/viewRoutes');
const apiRoutes = require('./controllers/api');
const helpers = require('./utils/helpers');
const expressListEndpoints = require('express-list-endpoints');


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // The session will last for 1 hour of inactivity
    maxAge: 3600000 // 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRoutes);
app.use('/api', apiRoutes);
console.log(expressListEndpoints(app));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});