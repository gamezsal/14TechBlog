const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    console.log("here");
    const posts = req.body;
    try {
        const newPost = await Comments.create({
            ...posts,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Comments.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(200).json(postData)
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;