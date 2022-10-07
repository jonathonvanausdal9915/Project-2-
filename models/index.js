const User = require('./user');
const Workout = require('./workout');
const Goal = require('./goal');
const Recipe = require('./recipe');

User.hasMany(Workout, {
    foreignKey: 'user_id',
});
Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Goal, {
    foreignKey: 'user_id',
});
Goal.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
});
Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Workout, Goal, Recipe};