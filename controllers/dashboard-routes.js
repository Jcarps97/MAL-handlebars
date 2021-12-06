const router = require('express').Router();
const { Entry } = require('../models/');
const withAuth = require('../utils/auth');

// ALL Anime
router.get('/', withAuth, async (req, res) => {
    try {
      const entryData = await Entry.findAll({
        where: {
            user_id: req.session.user_id,
          },
      });
  
      let entries = entryData.map((entry) =>
        entry.get({ plain: true })
      );

      console.log(entries);

      res.render('all-entries', { // all-posts handlebar
        layout: 'dashboard',
        entries,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.redirect('/'); // login handlebar
    }
  });

// NEW Anime
router.get('/new', withAuth, (req, res) => {
    res.render('newentry', { // new-anime handlebar
      layout: 'dashboard',
      logged_in: req.session.logged_in,
    });
  });

// UPDATE Anime  
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const entryData = await Entry.findByPk(req.params.id, {
    });

    const entry = entryData.get({ plain: true });
    
    res.render('edit-entry', {
        layout: 'dashboard',
        entry,
        logged_in: req.session.logged_in,
    });
  } catch (err) {
      res.status(500).json(err);
    }
});

// DELETE Anime
router.get('/delete', withAuth, (req, res) => {
  res.render('delete-entry', {
    layout: 'dashboard',
    logged_in: req.session.logged_in,
  });
});




module.exports = router;