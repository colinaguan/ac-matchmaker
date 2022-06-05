# **Opportunity_api.js Documentation (6-5-2022) **
## getOpportunities <br><br>
### What is this❓️❓️❓️
Retrieves all active opportunities.
### Expected data input format📜
```
No data input needed
```
---
## getJoinedOpportunities <br><br>
### What is this❓️❓️❓️
Gets all opportunities that the profile id is 
### Expected data input format📜
```
/api/getJoinedOpportunities/:profileid // replace profileid with a uuid
```
---
## getCreatedOpportunities <br><br>
### What is this❓️❓️❓️
Gets opportunities that the given profile id is the creator of.
### Expected data input format📜
```
/api/getCreatedOpportunities/:profileid // replace profileid with a uuid
```
---
## getPendingOpportunities <br><br>
### What is this❓️❓️❓️
Retrieves opportunites that user requested to join
### Expected data input format📜
```
/api/getPendingOpportunities/:profileid // replace profileid with a uuid
```
---
## getPastOpportunities <br><br>
### What is this❓️❓️❓️
Gets all opportunities whose active column is set to false of given profile id
### Expected data input format📜
```
/api/getPastOpportunities/:profileid // replace profileid with a uuid
```

## postOpportunity <br><br>
### What is this❓️❓️❓️
Inserts an opportunity into the opportunity table
### Expected data input format📜
```
{
    'usersponsors': '',
    'locationtype': '',
    'eventlocation': '',
    'eventzoomlink': '',
    'eventlocation': '',
    'organization': '',
    'description': '',
    'preferences': '',
    'eventdata': '',
    'startdate': '',
    'enddate': '',
    'eventbanner': '',
    'eventname': '',
    'userparticipants': '',
    'organizationtype':'',
    'opportunitytype':'',
    'roles':'',
    'starttime':'',
    'endtime' :'',
    'subject':'',
    'assignedroles':'',
}
```
---
## getOpportunity <br><br>
### What is this❓️❓️❓️
retrieves opportunity based on the provided opportunity id.
### Expected data input format📜
```
/api/getOpportunity/:opportunityid
```
---
## deleteOpportunity <br><br>
### What is this❓️❓️❓️
### Expected data input format📜
```
```