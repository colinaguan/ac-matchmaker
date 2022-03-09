const requestModel = require('./request_model');
const opportunityModel = require('./opportunity_model');
const uuid = require('uuid');

/**
 * GETs a request object
 * retrieves the requests associated with a specified user profile.
 * @param {*} req
 * @param {*} res
 */
 exports.getRequests = async (req, res) => {
  console.log(req.params.profileid);
  const pending = await requestModel.getRequests(req.params.profileid);
  res.status(201).send(pending);
};

/**
 * GETs a request object
 * retrieves the requests associated with a specified user profile.
 * @param {*} req
 * @param {*} res
 */
 exports.getPendingOpportunities = async (req, res) => {
  console.log(req.params.profileid);
  const pendingRequests = await requestModel.getRequests(req.params.profileid);
  const pendingOpps = [];
  for (let index = 0; index < pendingRequests.length; index++) {
    const opportunity = await opportunityModel.getOpportunity(pendingRequests[index].opportunityid);
    pendingOpps.push(opportunity);
  }
  console.log(pendingOpps);
  res.status(201).send(pendingOpps);
};
