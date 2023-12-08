## Code4Community Technical Assessment
This program is a chat application where users can log in using Google authentication, submit messages, and view their messages.

## Components explanaton
My application is split into two components, the frontend and backend.  The frontend is powered by REACT and is how the user is able to see everything on the frontend and submit messages to post.
The user can log in with google, which is powered by firebase authentication.  When a user submits a message in the form, the time of the message, the user that sent it, and the message itself gets sent to the backend via a POST request and the backend then pushes it to the cloud firestore database. 

## Fullfillment of requirements
User can submit a message using this form where I put a restriction of "required" and "maxLength="128" on the HTML input tag, to prevent empty message and  a max message length of 128.  
When a message is submitted in the form it is pushed to the database, where I keep track of the time the message was submitted.  Then, I sort the message in the database from most to least recent and map the list of messages along with their time and user.  Since messages are stored in a cloud database, anyone from any computer can send messages to that cloud database, and the message history from the database can be retrieved on any computer.  

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
