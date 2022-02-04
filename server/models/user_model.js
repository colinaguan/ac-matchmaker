require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool();
  

function getUsers() {
    
    const query =  {
        text: `SELECT * 
               FROM users`,
    }

    return new Promise((resolve, reject) => {
        pool.query(query, (error, results) => {
            if (error) {
                console.log(error)
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

module.exports = {
    getUsers,
}