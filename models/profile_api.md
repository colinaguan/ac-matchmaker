# **Profile_api.js Documentation (6-5-2022) **
## exports.profilePost<br><br>
### What is this❓️❓️❓️
Creates a nearly empty profile row in the database, it will only come with default values and the userid that the profile row is associated with. 

### Expected data input format📜
```
{
    userid: a uuid
}
```
---
## exports.getActiveProfiles<br><br>
### What is this❓️❓️❓️
Gets all users whose active column is set to true, then get all of their profiles.
### Expected data input format📜
```
No data needed
```
---
## getProfile<br><br>
### What is this❓️❓️❓️
Gets profile data, given a user uuid.
### Expected data input format📜
```
/api/getProfile/:userid // replace userid with a uuid
```
---
## getProfileByProfileId<br><br>
### What is this❓️❓️❓️
Gets profile data, given a profile uuid.
### Expected data input format📜
```
/api/getProfileByProfileId/:profileid // replace profileid with a uuid
```
---

## profileUpdate <br><br>
### What is this❓️❓️❓️
Updates a profile row, given a userid
### Expected data input format📜
```
{
    userpreference, 
    graduationyear,
    major, 
    experience,
    volunteeringexperience,
    about, 
    userlocation,
    availability, 
    profilepicture,
    userid
}
```
---
## getProfilesForApproval <br><br>
### What is this❓️❓️❓️
### Expected data input format📜
```
```
---
## changeProfileStatus <br><br>
### What is this❓️❓️❓️
### Expected data input format📜
```
```
---
## changeProfileStatusForRequest <br><br>
### What is this❓️❓️❓️
### Expected data input format📜
```
```