# iDCom-server
This is the back-end of iDCom - MERN Stacks with google Oauth2 authorization and session and cookie authentication.

# Missing variables
To run this server, you will need the following variables.
Mongo_uri: you can get on MongoDB atlas
session_secret
Google_cliend_id: that you can get from the Google cloud platform

Once you create your database you can use the data.js file to populate your data database.

# To-do
in the future, plan to add:

payment with stripe

a Zoom effect on the item review page

a CSRF protection

a better error management

pagination 

save shopping cart's items to user's data in the back-end

admin route 
    -- upload and delete items

    -- delete user

email notification

reset passport with email

# To run the project

make sure you have all the environment variables

npm install

npm run 