var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();


const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log('Server running on port 8000')
})

app.post("/api/submit", (req, res) => {
    const data = req.body;
    const docRef = db.collection("chat").doc();
    docRef.set({
        message: data[0], 
        user: data[1],
        time: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(data);
        res.status(200).send('Saved to Cloud Firestore!')
    })
    .catch((error) => {
        console.error("Error", error);
    });
})