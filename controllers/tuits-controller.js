import posts from "./tuits.js";
let tuits = posts;

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


    /*tuits = [
        newTuit,
        ...tuits
    ];*/
  tuits.push(newTuit);
  res.json(newTuit);
}


const findAllTuits = (req, res) =>{res.json(tuits);}

const updateTuit = (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updatedTuit = req.body;
 tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
 res.sendStatus(200);
}


const deleteTuit = (req, res) => {
 const tuitdIdToDelete = req.params.tid;
 tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
 res.sendStatus(200);
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}


