const userModel = require('./user_model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');


const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

/**
 * POSTs a user object
 * sends the row count of deleted records back
 * row count should always be 1 when success, 0 when fail.
 * @param {*} req
 * @param {*} res
 */
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

exports.userDelete = async (req, res) => {
  const deletedUsers = await userModel.userDelete(req.body.userid);
  console.log(deletedUsers);
  res.status(200).send(deletedUsers);
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
