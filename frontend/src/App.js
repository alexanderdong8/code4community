import React, {useState, useRef, useEffect} from 'react';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALiyDBnHMXQ9JZqQlTSCF0SHvGyj_iLts",
  authDomain: "c4c2-26d1d.firebaseapp.com",
  projectId: "c4c2-26d1d",
  storageBucket: "c4c2-26d1d.appspot.com",
  messagingSenderId: "431848434952",
  appId: "1:431848434952:web:81f13084a8a7ff7d8c50bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

function App() {


  const [email, setEmail] = useState("Guest");
  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        setEmail(result.user.email);
        console.log(email)
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };
  

  const [DocsOrdered, setDocsOrdered] = useState([]);
  
  const fetchChatHistory = () => {
    db.collection('chat')
    .orderBy('time', 'desc')
    .get()
    .then((querySnapshot) => {
      setDocsOrdered(querySnapshot.docs.map(doc => doc.data()))
      console.log(DocsOrdered);
    })
    .catch((error) => {
      console.error("error in fetching the chat history", error)
    })
  }

  useEffect(() => {
    fetchChatHistory();
  }, []);

  // let DocsUnordered = [];
  // db.collection('chat').get().then((querySnapshot) => {
  //   DocsUnordered=querySnapshot.docs.map(doc => doc.data());
  //   console.log(DocsUnordered)
  // })
  

  
  
  let message = "";
  let inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    message = inputRef.current.value;

    fetch("http://localhost:8000/api/submit", {
      method: "POST", 
      body: JSON.stringify([message, email]), 
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => {
        if (response.ok) {
          setTimeout(fetchChatHistory, 1000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
    console.log(message);
    inputRef.current.value = "";
    
  }

  return (
    
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <h2> Enter a new message!</h2>
      <div>You can type a message into this field and hit the enter key to add it to the chat below</div>
  
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength="128" placeholder="Enter your message" ref={inputRef}></input>
      </form>

    <h2>Message History</h2>
      {DocsOrdered.map((doc, index) => (
        <div style={{margin : '10px 0'}} key={index}>
          <div> Time:
            <i>({doc.time.toDate().toString().substring(0,21)})</i>
          </div>
          <div> Message:
            <b>{doc.message}</b>
          </div>
          <div> User:
            <b>{doc.user}</b>
          </div>
        </div>
      ))}
  
        
      

    </div>

  )
}

export default App;
