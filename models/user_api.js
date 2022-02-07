const userModel = require('./user_model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');


const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


exports.userPost = async (req, res) => {
  const plaintextPassword = req.body.userpassword;
  const hash = bcrypt.hashSync(plaintextPassword, salt);
  req.body.userpassword = hash;
  newUUID = uuid.v4();

  const newUser = await userModel.createUser(req.body, newUUID);
  res.status(200).send(newUser[0].userid);
};

exports.userGet = async (req, res) => {
  const users = await userModel.getUsers();
  res.status(200).send(users);
};

exports.userVerifyPost = async (req, res) => {
  const user = await userModel.getUser(req.body.useremail);
  // eslint-disable-next-line max-len
  const crypt = (bcrypt.compare(req.password, user[0].userpassword, function(err) {
    if (err) return 'error';
    return true;
  }));
  if (crypt != 'error') {
    delete user[0].userpassword;
    res.status(200).send(user[0]);
  }
};
