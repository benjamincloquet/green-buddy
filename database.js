require('mongoose')
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Succesfully connected to database !'))
  .catch((err) => console.error(err));
