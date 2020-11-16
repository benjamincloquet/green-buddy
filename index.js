const app = require('express')();
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

require('./database');

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
