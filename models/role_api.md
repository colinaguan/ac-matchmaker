# **Role_api.js Documentation (6-2-2022) 💼**
## exports.postRole💼➕<br><br>
### What is this❓️❓️❓️

Inserts a role into the database.
### Expected data input format📜
```
    opportunityid : valid opportunity id,
    tagid : valid majorid,
    responsibility : A string description of the role,
    isfilled : boolean,
    rolename : a text,
    qualifications: an array of text,
```

---
## exports.getRoles💼💼💼🤏<br><br>
### What is this❓️❓️❓️
Get all roles given the event id
### Expected data input format📜
```
/api/getRoles/:eventid // replace eventid with an eventid from the opportunity table
```
---
## exports.updateRoleFill💼📝 <br><br>
### What is this❓️❓️❓️
Updates a role row with new data for userid and isfilled.
### Expected data input format📜
```
{
    roleid: uuid,
    userid: uuid,
    isfilled: boolean,
}
```