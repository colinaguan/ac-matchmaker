require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * createProfile
 *      Inserts a profile object into the database
 *      Returns the created profile id
 * @param {*} profileInfo
 */
export async function createProfile(profileInfo) {
  const query = {
    text: `INSERT INTO profile 
            (userid)
            VALUES (($1))
            RETURNING profileid`,
    values: [profileInfo.userid],
  };

  console.log(await pool.query(query));
}
