# iDCom-server

This is the back-end of iDCom - MERN Stacks with google Oauth2 authorization and session and cookie authentication.

# To run the project

make sure you have all the environment variables
SESSION_SECRET
MONGO_URI
MONGO_DB_NAME
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

npm install

npm start

# Missing variables

    SESSION_SECRET: create your own random string
    MONGO_URI: you can get on MongoDB atlas
    MONGO_DB_NAME: your database name
    GOOGLE_CLIENT_ID: that you can get from the Google cloud platform
    GOOGLE_CLIENT_SECRET: that you can get from the Google cloud platform

Once you create your database, you can use the data.js file to populate your data database.

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
