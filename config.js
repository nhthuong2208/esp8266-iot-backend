'use strict';
const dotenv = require("dotenv")

dotenv.config()

const {
    PORT,
    HOST,
    API_KEY,
    AUTH_DOMAIN,
    // DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

module.exports = {
    port: PORT,
    host: HOST,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        // databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}