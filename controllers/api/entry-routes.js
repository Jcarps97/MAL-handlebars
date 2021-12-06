const withAuth = require('../../utils/auth')
const router = require('express').Router();
const { Entry } = require('../../models')

//Find an anime
router.get('/:id', withAuth, async (req, res) => {
    try {
      const entryData = await Entry.findByPk(req.params.id, {
      });
  
      if (!entryData) {
        res.status(404).json({ message: "No entry found with that id :("})
        return;
      }
  
      const entry = entryData.get({ plain: true});
  
      res.render('entry', { 
        layout: 'dashboard',
        entry,
        logged_in: req.session.logged_in,
      });
  
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});
  
//Create a new entry
router.post('/', withAuth, async (req, res) => {
      try {
          const newEntry = await Entry.create({
              title: req.body.title,
              episodes_seen: req.body.episodes_seen,
              rating: req.body.rating,
              user_id: req.session.user_id, 
          });
  
          res.status(200).json(newEntry);
      } catch (err) {
          res.status(400).json(err);
      }
});
  
//Delete entry
router.delete('/:id', withAuth, async (req, res) => {
      try {
        const entryData = await Entry.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id, 
          }
        });
    
        if(!entryData) {
          res.status(404).json({ message: "No entry found with id :("})
          return;
        }
    
        res.status(200).json(entryData);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
});
  
//Update Post
router.put('/:id', (req, res) => {
      Entry.update( req.body, {
          where: {
              id: req.params.id,
              user_id: req.session.user_id, 
          }
      })
      .then((updatedEntry) => {
          res.json(updatedEntry)
      })
      .catch((err) => { res.json(err)
      console.log(err) })
});
  
module.exports = router;