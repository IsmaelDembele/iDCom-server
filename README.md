# iDCom-server
The back end of idcommerce - MERN Stacks with google Oauth2 authorization and session and cookie authentication.

# Important: my sign-in functionality with cookie and session  does not work on Heroku 
Both iDCom-server and idcommerce are hosted on Heroku.
Heroku does not allow setting up cookies for security reasons; therefore,
login will not work on a client hosted on Heroku. The server creates a session
but is unable to send connect.sid cookie to the client.

# Solution
The solution would be to buy my domain on sites like GoDaddy or Namecheap
and get an SSL certificate on dyno for instance. Then it would work because, I would
be the only one using the cookie on my domain, as oppose to the Heroku domain, which is
shared by many different apps which could access your cookie with the sign-in token.

More information https://devcenter.heroku.com/articles/cookies-and-herokuapp-com.
However, I could have 


# missing variables
To run this project, you will need the following variables.
Mongo_uri: you can get on MongoDB atlas
session_secret
Google_cliend_id: that you can get from the Google cloud platform

Once you create your database you can use the data.js file to populate your data database.

# To-do
in the future, plan to add:

payment with stripe

a Zoom effect in itemReview

a CSRF protection

a better error management

pagination 

save shoppingCart items to user's data in the back-end

# To run the project

npm install

npm run 