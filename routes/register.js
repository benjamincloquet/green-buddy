module.exports = (router) => {
  router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello');
  });
};
