const requestModel = require('./request_model');
const uuid = require('uuid');


/**
 * GETs a request object
 * retrieves the requests associated with a specified user profile.
 * @param {*} req
 * @param {*} res
 */
 exports.getPendingOpportunities = async (req, res) => {
  console.log(req.params.profileid);
  const pending = await requestModel.getPendingOpportunities(req.params.profileid);
  res.status(201).send(pending);
};


/**
 * GETs a request object
 * retrieves the request associated with a specified user profile and event id if one exists.
 * @param {*} req
 * @param {*} res
 */
 exports.getPendingRequest = async (req, res) => {
  console.log(req.params.profileid);
  console.log(req.params.eventid)
  const pending = await requestModel.getPendingRequest(req.params.profileid, req.params.eventid);
  res.status(201).send(pending);
};


/**
 * GETs a request object
 * retrieves the received requests associated with a specified event id if any exists.
 * @param {*} req
 * @param {*} res
 */
 exports.getPendingRequestsReceived = async (req, res) => {
  console.log(req.params.eventid)
  const pending = await requestModel.getPendingRequestsReceived(req.params.eventid);
  res.status(201).send(pending);
};


/**
 * GETs a request object
 * retrieves the sent requests associated with a specified event id if any exists.
 * @param {*} req
 * @param {*} res
 */
 exports.getPendingRequestsSent = async (req, res) => {
  console.log(req.params.eventid)
  const pending = await requestModel.getPendingRequestsSent(req.params.eventid);
  res.status(201).send(pending);
};

/**
 * POSTs a request object
 * sends the newly created id back.
 * @param {*} req
 * @param {*} res
 */
 exports.postRequest = async (req, res) => {
  console.log(req.body);
  const newUUID = uuid.v4();
  try {
    const requestId = await requestModel.postRequest(req.body, newUUID);
    console.log(requestId);
    res.status(201).send(requestId);
  }
  catch (error) {
    console.log(error);
    res.status(500).send('error creating opportunity')
  }
  
};
