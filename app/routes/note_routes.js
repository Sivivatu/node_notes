module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
      // You'll create note here
      res.send('Hello')
  });
};
