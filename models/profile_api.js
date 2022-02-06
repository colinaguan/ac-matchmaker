// const profileModel = require('./profile_model');

/**
 * POSTs a profile object
 * sends the newly created id back.
 * @param {*} req
 * @param {*} res
 */
exports.profilePost = async (req, res) => {
  console.log(req.body.profileInfo);
  // const profileId = await profileModel.createProfile(profileInfo);
  // res.status(201).send(profileId);
  res.send(201);
};
