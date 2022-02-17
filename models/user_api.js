const userModel = require('./user_model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

// JWT Requires
const jwt = require('jsonwebtoken');
// The Json file is for development purposes only
const secrets = require('./secrets.json');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

/**
 * POSTs a user object
 * @param {*} req
 * @param {*} res
 */
exports.userPost = async (req, res) => {
  console.log(req.body);
  const plaintextPassword = req.body.userpassword;
  const hash = bcrypt.hashSync(plaintextPassword, salt);
  req.body.userpassword = hash;
  newUUID = uuid.v4();

  const newUser = await userModel.createUser(req.body, newUUID);
  res.status(200).send(newUser);
};


/**
 * GETs user objects
 * @param {*} req
 * @param {*} res
 */
exports.userGet = async (req, res) => {
  const users = await userModel.getUsers();
  res.status(200).send(users);
};


/**
 * DELETEs user objects
 * @param {*} req
 * @param {*} res
 */
exports.userDelete = async (req, res) => {
  const deletedUsers = await userModel.userDelete(req.body.userid);
  console.log(deletedUsers);
  res.status(200).send(deletedUsers);
};


/**
 * GETs user object and verifies login credentials before returning user object
 * @param {*} req
 * @param {*} res
 */
exports.userVerifyPost = async (req, res) => {
  const user = await userModel.getUser(req.body.useremail);
  // eslint-disable-next-line max-len
  const crypt = (bcrypt.compare(req.password, user[0].userpassword, function (err) {
    if (err) return 'error';
    return true;
  }));
  if (crypt != 'error') {
    delete user[0].userpassword;

    // Signing a JWT Token, returned as a response
    const accessToken = jwt.sign(
      {
        userid: user[0].userid,
        useremail: user[0].useremail,
        usertype: user[0].usertype,
      },
      secrets.accessToken,
      {
        expiresIn: '60m',
        algorithm: 'HS256',
      });
    /**
     *  This is the old login response
     *  //res.status(200).send(user[0]);
     */
    
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.status(201).json({
      accessToken: accessToken, 
    });
  }
};
