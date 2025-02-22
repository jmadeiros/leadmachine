"use client"

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAFcMdQL-na6EkHz1bL8Npq4vje9uoiTPY",
  authDomain: "leadmachine1-c2ae4.firebaseapp.com",
  projectId: "leadmachine1-c2ae4",
  storageBucket: "leadmachine1-c2ae4.firebasestorage.app",
  messagingSenderId: "492043321910",
  appId: "1:492043321910:web:16ff5a2c1e5b80a60e8e97",
  measurementId: "G-GPBS6FWJ8F"
}

// Initialize Firebase only on the client side
let analytics
let app

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
}

export { app, analytics } 