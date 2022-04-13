const mongoose = require('mongoose');
const tuitsDao = require('./database/tuits/tuits-dao');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
app.use(cors());
//mongodb+srv://webdevMongo:<password>@cluster0.ev2yx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority




const CONNECTION_STRING = 'mongodb+srv://webdevMongo:webdevMongo@cluster0.ev2yx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
 //|| 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

//mongoose.connect('mongodb://localhost:27017/webdev');

app.use(express.json());
app.use(session({
  secret: 'SECRETO',
  cookie: {secure: false}
}));
// const promise = tuitsModel.find();
// promise.then((tuits) => {
//   console.log(tuits);
// })


// const examples = require("./examples-controller")
// examples(app);
//require("./controllers/examples-controller")(app);
//require("./controllers/users-controller")(app);
//require("./controllers/session-controller")(app);
require("./controllers/tuits-controller/index")(app);

// app.get('/hello', (request, response) => {
//   response.send("Hello World");
// });

app.listen(process.env.PORT || 4000)
//app.listen(4000);

