const router = require('express').Router();
const {Recipe} = require('../../models');

router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        const newRecipe = await Recipe.create(req.body);
        req.session.save(() => {
            req.session.user_id = newRecipe.user_id;
            req.session.logged_in = true;
            res.status(200).json(newRecipe);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;