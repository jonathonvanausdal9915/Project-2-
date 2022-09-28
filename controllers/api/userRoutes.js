const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {
    try {
        const userData = await user.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
        res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
        return;
    }

});

module.exports = router;