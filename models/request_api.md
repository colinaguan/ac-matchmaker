## exports.getUserIncomingRequests<br><br>
### What is this❓️❓️❓️
retrieves the incoming requests associated with a specified user profile.
### Expected data input format📜
```
/api/getUserOutgoingRequests/:profileid // use valid profile uuid
```
---
## exports.getUserOutgoingRequests<br><br>
### What is this❓️❓️❓️
retrieves the outgoing requests associated with a specified user profile. 
### Expected data input format📜
```
/api/getUserIncomingRequests/:profileid // use valid profile uuid
```
---
## exports.getPendingRequest<br><br>
### What is this❓️❓️❓️
retrieves the request associated with a specified user profile and event id if one exists.
### Expected data input format📜
```
/api/getPendingRequest/:profileid/:eventid // replace :profileid and :eventid with valid uuid from profile table and opportunity table respectively
```
---
## exports.getPendingRequestsReceived<br><br>
### What is this❓️❓️❓️
retrieves the received requests associated with a specified event id amd profileid if any exist.
### Expected data input format📜
```
/api/getPendingRequestsReceived/:profileid/:eventid 
```
---
## exports.getPendingRequestsSent<br><br>
### What is this❓️❓️❓️
retrieves the sent requests associated with a specified event id and profile id if any exist.
### Expected data input format📜
```
/api/getPendingRequestsSent/:profileid/:eventid
```
---
## exports.getApprovedRequests<br><br>
### What is this❓️❓️❓️
retrieves the approved requests associated with a specified event id amd profileid if any exist.
### Expected data input format📜
```
/api/getApprovedRequests/:profileid/:eventid
```
---
## exports.getRejectedRequests<br><br>
### What is this❓️❓️❓️
retrieves the rejected requests associated with a specified event id amd profileid if any exist.
### Expected data input format📜
```
/api/getRejectedRequests/:profileid/:eventid
```
---
## exports.postRequest<br><br>
### What is this❓️❓️❓️
Inserts a new request row into the database
### Expected data input format📜
```
{
    requestee: a userid uuid from account table,
    requester: a userid uuid from account table,
    requestmessage: a text content of the request message,
    opportunityid: a eventid uuid from opportunity table,
    role: a text description of the role,
}
```
---
## exports.cancelRequest<br><br>
### What is this❓️❓️❓️
sets the specified request status to canceled
### Expected data input format📜
```
{
    requestid: uuid from the request table,
}
```
---
## exports.approveRequest<br><br>
### What is this❓️❓️❓️
sets the specified request status to approved and adds the users profile id to the opportunity participants list and assigned roles
### Expected data input format📜
```
{
    requestid: uuid from the request table,
}
```
---
## exports.rejectRequest<br><br>
### What is this❓️❓️❓️
sets the specified request status to rejected
### Expected data input format📜
```
{
    requestid: uuid from the request table,
}
```
---