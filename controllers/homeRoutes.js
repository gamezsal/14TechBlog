const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in,
  })
});
router.get('/login', async (req, res) =>{
  res.render('login', {
    logged_in: req.session.logged_in,
  })
});
router.get('/signup', async (req, res) =>{
  res.render('signup', {
    logged_in: req.session.logged_in,
  })
});
router.get('/dashboard', async (req, res) => {
  res.render('dashboard')
});

module.exports = router;