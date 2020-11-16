const app = require('express')();
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

require('./database');
app.use(require('body-parser').json());
app.use('/', require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
