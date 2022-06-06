require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE
// THESE ARE DELETE QUERIES ONLY FOR AUTOMATED TESTING NEVER HOST THESE ON A ROUTE

/**
 * Deletes a user from the user table
 * @param {*} data 
 */

exports.deleteUser = async (id) =>{
    const query = {
        text: `DELETE FROM account
                WHERE userid = ($1)`,
        values: [id],
      };
    const {rows} = await pool.query(query);
}

/**
 * Deletes a comment from the comment table
 * @param {*} data 
 */
 exports.deleteComment = async (id) =>{
  const query = {
      text: `DELETE FROM comment
              WHERE commentid = ($1)`,
      values: [id],
    };
  const {rows} = await pool.query(query);
}

/**
 * Deletes a post from the post table
 * @param {*} data 
 */
 exports.deletePost = async (id) =>{
  const query = {
      text: `DELETE FROM post
              WHERE postid = ($1)`,
      values: [id],
    };
  const {rows} = await pool.query(query);
}

/**
 * Deletes a role from the role table
 * @param {*} data 
 */
 exports.deleteRole = async (id) =>{
  const query = {
      text: `DELETE FROM role
              WHERE roleid = ($1)`,
      values: [id],
    };
  const {rows} = await pool.query(query);
}

