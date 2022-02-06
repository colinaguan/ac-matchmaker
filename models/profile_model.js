require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * createProfile
 *      Inserts a profile object into the database
 *      Returns the created profile id
 * @param {*} profileInfo
 */
exports.createProfile= async (profileInfo) => {
  const query = {
    text: `INSERT INTO profile 
            (userid)
            VALUES (($1))
            RETURNING profileid`,
    values: [profileInfo.userid],
  };

  // Returns the newly created profile object's id
  // console.log(await pool.query(query));
  const id = await pool.query(query).rows[0];
  return id;
};
