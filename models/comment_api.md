# **Comment_api.js Documentation (6-2-2022) 💬**
## exports.postComment💬➕<br><br>
### What is this❓️❓️❓️
Inserts a comment into the database
### Expected data format📜
```
{
postid : uuid,
userid : uuid, 
content : text,
createddate : Date().toISOString()
}
```
---

## exports.getComments💬💬💬🤏<br><br>
### What is this❓️❓️❓️
Gets all comments for a given postid
### Expected data format📜
```
/api/getComments/:postid // replace postid with an post id from post table
```