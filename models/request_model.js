require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * getPendingOpportunities
 * gets request data associated with profile id provided
 * Returns the specified profiles requests sent to or from the user that are still active
 * @param {*} profileid
 */
 exports.getPendingOpportunities= async (profileid) => {
  const query = {
    text: `SELECT requests.requester, requests.requestee, requests.requeststatus, events.*
           FROM requests
           INNER JOIN events ON ((requests.requester=events.eventid OR requests.requestee=events.eventid) AND (requests.requester = $1 OR requests.requestee = $1))`,
    values: [profileid],
  };

  const {rows} = await pool.query(query);
  console.log(rows);
  return rows;
};

/**
 * getPendingRequest
 * gets request data associated with profile id and opportunity id provided
 * Returns the specified profiles request for the specified opportunity if one exists
 * @param {*} profileid
 * @param {*} eventid
 */
 exports.getPendingRequest = async (profileid, eventid) => {
  const query = {
    text: `SELECT *
           FROM requests
           WHERE requester = ($1) AND requestee = ($2) AND requeststatus = ($3)`,
    values: [profileid, eventid, "pending"],
  };

  const {rows} = await pool.query(query);
  console.log(rows);
  return rows[0];
};

/**
 * getPendingRequestsReceived
 * gets request data associated with opportunity id provided
 * Returns the requests received for the specified opportunity if any exist
 * @param {*} eventid
 */
 exports.getPendingRequestsReceived = async (eventid) => {
  const query = {
    text: `SELECT *
           FROM requests
           WHERE requestee = ($1) AND requeststatus = ($2)`,
    values: [eventid, "pending"],
  };

  const {rows} = await pool.query(query);
  console.log(rows);
  return rows;
};


/**
 * getPendingRequestsSent
 * gets request data associated with opportunity id provided
 * Returns the requests sent out for the specified opportunity if any exist
 * @param {*} eventid
 */
 exports.getPendingRequestsSent = async (eventid) => {
  const query = {
    text: `SELECT *
           FROM requests
           WHERE requester = ($1) AND requeststatus = ($2)`,
    values: [eventid, "pending"],
  };

  const {rows} = await pool.query(query);
  console.log(rows);
  return rows;
};


/**
 * Query to create a new request in the request table in ACMatchMaker postgreSQL DB
 * @param {*} requestInfo
 * @param {*} newUUID
 */
 exports.postRequest = async (requestInfo, newUUID) => {
  var currentdate = new Date().toISOString();
  const query = {
    text: `INSERT INTO requests 
             (requestid, requestee, requester, requeststatus, requestdatetime, requestmessage) 
             VALUES (($1), ($2), ($3), ($4), ($5), ($6))
             RETURNING requestid`,
    values: [newUUID, requestInfo.requestee , requestInfo.requester, "pending", currentdate, requestInfo.requestmessage],
  };
  const {rows} = await pool.query(query);
  console.log(rows);
  return rows[0].requestid;
};
