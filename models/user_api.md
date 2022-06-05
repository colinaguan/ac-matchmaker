# **User_api.js Documentation (6-5-2022) 😀**
## exports.userPost😀➕<br><br>
### What is this❓️❓️❓️
Creates a user account, it will also sign a JWT, which is used in email confirmation. Request should send a body of the following format:
### Expected data input format📜
```
{
 useremail: <A user email in text>,
 userpassword: <A plain text password>,
 active: false,
}
```
---
## exports.getActiveUsers😀😀🤏<br><br>
### What is this❓️❓️❓️
Gets all users whose columns are set to active
### Expected data input format📜
```
No Data needed, just call as is.
```
---
## exports.userDeactivate🙃<br><br>
### What is this❓️❓️❓️
Sets the active column of the given user uuid to the given req.body. Name is abit misleading, it acts like a update function.
### Expected data input format📜
```
{
  active : boolean
  userid : a valid uuid
}
```
---
## exports.userVerifyPost😀❓️ <br><br>
### What is this❓️❓️❓️
Checks useremail and the password and if it matches a row in the database, it will return a JWT to authenticate the session.
### Expected data input format📜
```
useremail : a uuid
userpassword : text password
```
---
## exports.verifyUserSession😀⌚ <br><br>
### What is this❓️❓️❓️
This function is used to handle persistent user sessions. This function relies on auth.check to see if a given JWT was still valid (i.e signed from our server, not expired).
### Expected data input format📜
```
No data needed to call, it just checks the httponly cookies where our jwt is.
```
---
## exports.expireUserSession ⌚<br><br>
### What is this❓️❓️❓️
Called upon logout, clears out the httponly cookie.
### Expected data input format📜
```
No data needed to call, it just sends back an empty cookie.
```