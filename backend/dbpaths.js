var admin = require("firebase-admin");
const db = admin.firestore();

export const user_shows = (user_id) => db.collection("user_data").doc(user_id).collection("tv_shows");


