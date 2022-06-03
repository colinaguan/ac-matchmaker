# **delete_model.js Documentation (6-2-2022) 💀**
## 💀💀💀💀 NEVER HOST DELETE QUERIES ON AN API ROUTE for security reasons
All functions within this file just deletes a row from the database given their primary key. Only used for automated unit tests. 
<br> <br> Don't host these on a route, if you want to make a row inaccessible, have a column that makes it "inactive" or something.