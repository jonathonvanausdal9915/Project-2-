const router = require('express').Router();
const { Workout, User } = require('../models');

router.get('/', async(req, res) => {
    try {
        // Get all users, sorted by name
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [
                ['name', 'ASC']
            ],
        });

        const workout = workoutData.map((workout) => workout.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            workOut,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/workout/:id', async(req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        // Serialize user data so templates can read it
        const users = userData.map((project) => project.get({ plain: true }));

        // Pass serialized data into Handlebars.js template
        res.render('homepage', { users });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;