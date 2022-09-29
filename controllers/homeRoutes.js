const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async(req, res) => {
    try {
        const workoutData = await Workout.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            }, ],
        });

        const workouts = workoutData.map((workout) => workout.get({ plain: true }));

        res.render('login', {
            workouts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async(req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            // include: [{ model: Workout }], include this with dashboard get
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('/');
})

module.exports = router;