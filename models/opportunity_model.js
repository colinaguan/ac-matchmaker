require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool();

/**
 * getJoinedOpportunities
 * gets opportunity data based on user profileid provided
 * Returns the specified user's joined opportunities
 * @param {*} profileid
 */
 exports.getJoinedOpportunities = async (profileid) => {
  const query = {
    text: `SELECT * FROM events 
           WHERE ($1 = ANY(userparticipants))
           AND active = true`,
    values: [profileid],
  };

  const {rows} = await pool.query(query);
  return rows;
};

/**
 * getCreatedOpportunities
 * gets opportunity data based on user profileid provided
 * Returns the specified user's created opportunities
 * @param {*} profileid
 */
 exports.getCreatedOpportunities = async (profileid) => {
  const query = {
    text: `SELECT * FROM events 
           WHERE usersponsors->>'creator' = $1
           AND active = true`,
    values: [profileid],
  };

  const {rows} = await pool.query(query);
  console.log(rows);
  return rows;
};


/**
 * getPastOpportunities
 * gets opportunity data based on user profileid provided
 * Returns the specified user's past opportunities
 * @param {*} profileid
 */
 exports.getPastOpportunities = async (profileid) => {
  console.log('here ' + profileid);
  const query = {
    text: `SELECT * FROM events 
           WHERE (($1 = ANY(userparticipants)) OR usersponsors->>'creator' = $1)
           AND active = false`,
    values: [profileid],
  };

  const {rows} = await pool.query(query);
  console.log('here ' + rows)
  return rows;
};


/**
 * Query to create a new opportunity in the opportunity table in ACMatchMaker postgreSQL DB
 * @param {*} opportunityInfo
 * @param {*} newUUID
 */
 exports.postOpportunity = async (opportunityInfo, newUUID) => {
  const query = {
    text: `INSERT INTO events 
             (eventid, usersponsors, remote, eventlocation, eventzoomlink, organization, description, eventtype, preferences, eventdata, startdate, enddate, active, eventbanner, eventname, userparticipants) 
             VALUES (($1), ($2), ($3), ($4), ($5), ($6), ($7), ($8), ($9), ($10), ($11), ($12), ($13), ($14), ($15), ($16))
             RETURNING eventid`,
    values: [newUUID, opportunityInfo.usersponsors, opportunityInfo.remote, opportunityInfo.eventlocation, opportunityInfo.eventzoomlink, opportunityInfo.organization, opportunityInfo.description, opportunityInfo.eventtype, opportunityInfo.preferences, opportunityInfo.eventdata, opportunityInfo.startdate, opportunityInfo.enddate, true, opportunityInfo.eventbanner, opportunityInfo.eventname, opportunityInfo.userparticipants],
  };
  console.log(opportunityInfo.userparticipants);
  const {rows} = await pool.query(query);
  console.log(rows);
  return rows[0].eventid;
};