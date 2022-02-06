require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * createProfile
 *      Inserts a profile object into the database
 *      Returns the created profile id
 * @param {*} userid
 */
exports.createProfile= async (userid) => {
  const query = {
    text: `INSERT INTO profile 
            (userid)
            VALUES (($1))
            RETURNING profileid`,
    values: [userid],
  };

  // Returns the newly created profile object's id
  const {rows} = await pool.query(query);
  console.log(rows[0].profileid);
  // const id = await pool.query(query).rows[0];
  return 'ProfileCreated';
};
