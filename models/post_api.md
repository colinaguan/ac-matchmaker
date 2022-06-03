# **Post_api.js Documentation (6-2-2022) 💭**
## exports.postPost💭➕<br><br>
### What is this❓️❓️❓️
Inserts a post row into the post table. The post table is used for the threads (forums) section of each opportunity.

### Expected data format📜
```
{
opportunityid : uuid,
userid : uuid, 
content : text,
title: text,
createddate : Date().toISOString()
}
```
---
## exports.getPosts💭💭💭🤏<br><br>
### What is this❓️❓️❓️
Returns all of the posts for a given opportunityid
### Expected data format📜
```
/api/getPosts/:eventid // replace :eventid with an event id from opportunity table
```