# iDCom-server

This is the back-end of iDCom - MERN Stacks with google Oauth2 authorization and session and cookie authentication.

# To run the project

make sure you have all the environment variables
CORS_ORIGIN
SESSION_SECRET
MONGO_URI
MONGO_DB_NAME
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

npm install

npm start

# Missing variables
    CORS_ORIGIN: which is https://idcom.netlify.app/ in my case and localhost:3000 in development mode
    SESSION_SECRET: create your random string
    MONGO_URI: you can get on MongoDB atlas
    MONGO_DB_NAME: your database name
    GOOGLE_CLIENT_ID: that you can get from the Google cloud platform
    GOOGLE_CLIENT_SECRET: that you can get from the Google cloud platform

Once you create your database, you can use the data.js file to populate your data database.


# implemented functions

Express server

Connection to MongoDB Database with mongoose ODM

authentication with google auth 2.0

local authentication strategy with bcrypt and session and cookies

Register session to MongoDB database

use Helmet to set header security options

CSRF attacks protections 

cors to restrict access to the server

Compression of javascript code


# To-do

in the future, plan to add:

    save shopping cart's items to user's data in the back-end

    admin route
    -- upload and delete items

    -- view list of user

    -- delete a user

    email notification

    reset passport with email

    payment with stripe