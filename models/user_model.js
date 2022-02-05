require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();


/**
 * Query to retrieve all users from the user table in ACMatchMaker postgreSQL DB
 * @return {promise}
 */
function getUsers() {
  const query = {
    text: `SELECT * 
          FROM users`,
  };

  return new Promise((resolve, reject) => {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results.rows);
    });
  });
}

/**
 * Query to retrieve specific user from the user table in
 *  ACMatchMaker postgreSQL DB
 * retrieves user whos useremail = email
 * @param {*} email
 * @return {promise}
 */
function getUser(email) {
  const query = {
    text: `SELECT * 
               FROM users
               WHERE useremail = $1`,
    values: [email],
  };

  return new Promise((resolve, reject) => {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results.rows);
    });
  });
}

/**
 * Query to create a new user in the user table in ACMatchMaker postgreSQL DB
 * @param {*} userInfo
 * @param {*} newUUID
 * @return {promise}
 */
function createUser(userInfo, newUUID) {
  const query = {
    text: `INSERT INTO users 
             (userid, useremail, userpassword, usertype, userdata) 
             VALUES (($1), ($2), ($3), ($4), ($5))`,
    values: [newUUID, userInfo.useremail, userInfo.userpassword,
      userInfo.usertype, userInfo.userdata],
  };
  return new Promise(function(resolve, reject) {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results);
    });
  });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
