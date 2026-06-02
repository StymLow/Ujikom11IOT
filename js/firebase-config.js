// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUuX7wgDUHYYjuzUgSdkKNzDvqPARu7ak",
  authDomain: "ujikomiot11.firebaseapp.com",
  databaseURL: "https://ujikomiot11-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikomiot11",
  storageBucket: "ujikomiot11.firebasestorage.app",
  messagingSenderId: "905937516702",
  appId: "1:905937516702:web:0980c1499ea931b65e238f",
  measurementId: "G-CTDSXRYCCJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
