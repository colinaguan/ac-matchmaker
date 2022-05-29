require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * Creates a post and inserts it into the Post table.
 * @param {*} data This data parameter is a json object that requires the following: opportunityid, userid, content.
 */
exports.insertPost = async (data) => {
    const query = {
        text: `INSERT INTO post(opportunityid, userid, content, title)
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
        values: [data.opportunityid, data.userid, data.content, data.title],
    };
    const {rows} = await pool.query(query);
    // console.log(rows);
    return rows[0];
}

/**
 * Gets all posts for a specific opportunity id
 */
exports.getPosts = async (data) => {
    // console.log(data);
    const query = {
        text: `
        SELECT post.postid, post.opportunityid, post.userid, post.content,
        profile.major, profile.about, profile.profilepicture, profile.firstname, profile.lastname
        FROM post
        JOIN profile ON post.userid = profile.userid 
        WHERE opportunityid = ($1)
        `,
        values: [data.opportunityid],        
    }
    const {rows} = await pool.query(query);
    // console.log(rows);
    return rows;
}