const router = require('express').Router();
const {Goal} = require('../../models');

router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        const newGoal = await Goal.create(req.body);
        req.session.save(() => {
            req.session.user_id = newGoal.user_id;
            req.session.logged_in = true;
            res.status(200).json(newGoal);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;