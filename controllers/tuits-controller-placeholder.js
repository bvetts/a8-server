//import posts from "./tuits.js";
//let tuits = posts;
import tuitsDao from "../tuits/tuits-dao.js";

/*
const createTuit = (req, res) => {
 let newTuit = req.body;
 //newTuit._id = (new Date()).getTime()+'';
 //newTuit.likes = 0;
 newTuit['_id'] = (new Date()).getTime()+'';
 let username = newTuit.username;
 newTuit['username'] = "reactjs";

newTuit['username'] = "bestboy";
newTuit['handle'] = "gooddoggo";
newTuit['videoClass'] = "wd-mediaBoxHide";
newTuit['imageClass'] = "wd-mediaBoxHide";
newTuit['avatar'] = "/images/user.jpg";
newTuit['retuits'] = 0;
newTuit['likes'] = 0;
newTuit['dislikes'] = 0;
newTuit['replies'] = 0;

newTuit['liked'] = false;
  tuits.push(newTuit);
  res.json(newTuit);
}
*/


//this might need work
const createTuit = async (req, res) => {
 let newTuit = req.body;
 //newTuit._id = (new Date()).getTime()+'';
 //newTuit.likes = 0;
 newTuit['_id'] = (new Date()).getTime()+'';
 let username = newTuit.username;


newTuit['username'] = "bestboy";
newTuit['handle'] = "gooddoggo";
newTuit['videoClass'] = "wd-mediaBoxHide";
newTuit['imageClass'] = "wd-mediaBoxHide";
newTuit['avatar'] = "/images/user.jpg";
newTuit['retuits'] = 0;
newTuit['likes'] = 0;
newTuit['dislikes'] = 0;
newTuit['replies'] = 0;

newTuit['liked'] = false;

   const insertedTuit = await tuitsDao.createTuit(newTuit);
  //tuits.push(newTuit);
  res.json(insertedTuit);
}



//const findAllTuits = (req, res) =>{res.json(tuits);}
const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

/*
const updateTuit = (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updatedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
 res.sendStatus(200);
}
*/
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.send(status);
}





/*
const deleteTuit = (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
 res.sendStatus(200);
}
*/
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.send(status);
}



export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}


