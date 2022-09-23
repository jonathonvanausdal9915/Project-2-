const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); //Use for handlebars later
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
})

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`)
// })
//   });
  