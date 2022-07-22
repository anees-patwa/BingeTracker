const express = require("express");
const app = express();

var admin = require("firebase-admin");
var serviceAccount = require("bingetracker-firebase-adminsdk-4q3s8-b6fbfd3c97.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
const db_paths = require("./db_paths.js");

app.get('/shows', (req, res) => {
    const user_id = req.body.id;
    if (user_id) {
        const show_progress_path = await db_paths.user_shows(user_id).get();
        const show_progress = show_progress_path.data();
        res.send(show_progress);
    }
    db.collection("user_data")
    //get list of shows for a user
})

app.post('/shows', (req, res) => {
    //add a show to the list
    //1. check against database if it already exists
    //2. add if it already exists
    //3. get info if doesn't exist
    //4. add to database of shows
    //5. add to user list
})

app.get('/searchShows', (req, res) => {
    //get search results for adding shows
})