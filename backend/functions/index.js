const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var serviceAccount = require("./bingetracker-firebase-adminsdk-4q3s8-ec354928a0.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
const user_shows = (user_id) => db.collection("user_data").doc(user_id).collection("tv_shows");
const user_doc = (user_id) => db.collection("user_data").doc(user_id);

app.post('/users', (req, res) => {
    const user_id = req.body.id;
    if (user_id) {
        const path_to_user_doc = user_doc(user_id);
        const today = new Date();
        path_to_user_doc.set({
            user_created: today
        }).then(() => {
            res.status(201).send(`Created document for new user: ${user_id}`);
        }).catch((error) => {
            console.error(error);
            res.status(400).send(`Error creating new user: ${user_id}`);
        })
    } else {
        res.status(400).send(`No user_id provided`);
    }
})

exports.app = functions.https.onRequest(app);
