## Code4Community Technical Assessment
This program is a chat application where users can log in using Google authentication, submit messages, and view their messages.

## Components explanaton
My application is split into two components, the frontend and backend.  The frontend is powered by REACT and is how the user is able to see everything on the frontend and submit messages to post.
The user can log in with google, which is powered by firebase authtncation.  
When a user submits a message in the form, the time of the message, the user that sent it, and the message itself gets sent to the backend via a POST request and the backend then pushes it to the cloud firestore database. 

## How to run
To start the front end run the commands
```sh
cd frontend
npm i
npm start
```

To start the back nd run the commands
```sh
cd backend
npm i
node index.js
```
