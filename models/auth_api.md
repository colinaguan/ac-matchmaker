# **Auth_api.js Documentation (6-2-2022) ⭐️⭐️⭐️**

## exports.check🔑
`exports.check = (req, res, next) =>{`
### What is this❓️❓️❓️
exports.check is used to check whether a JSON Web Token (JWT) that accompanies an http request is a valid, signed JWT. Most api routes will utilize exports.check to verify a user's login session. The routes that do not use exports.check will not require a JWT to access, such as signing into the website or registering.

### Syntax Notes📔
- `next` parameter references the funtion object "locked behind" this check function


---

## exports.dummy🤪
`exports.dummy = async (req, res) =>{`
### What is this❓️❓️❓️
exports.dummy is a DEBUG route to verify the JWT exists.

---
## exports.verify🕵
`exports.verify = (req, res) => {`
### What is this❓️❓️❓️
exports.verify is used to confirm account registrations. It checks whether the verification link the user clicked in the verification email is valid or not. If it's valid, the user will be able to login to their account.