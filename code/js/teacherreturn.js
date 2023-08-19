import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getFirestore, 
    doc,
    setDoc,
    addDoc,
    collection,
    getDoc, } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCION4gldRlEgISWgJBst3RszWUfpSUaUw",
    authDomain: "lmspis.firebaseapp.com",
    projectId: "lmspis",
    storageBucket: "lmspis.appspot.com",
    messagingSenderId: "674585430385",
    appId: "1:674585430385:web:4fef7a2c7081db88214ed0",
    measurementId: "G-636PSZ5R5W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const empIDInputs = document.getElementById("empIDInput");
const fetchButton = document.getElementById("fetchButton");
const detailsContainer = document.getElementById("detailsContainer");
const teacherName = document.getElementById("teacherName");
const studentAdmissionNo = document.getElementById("studentAdmissionNo");
const issuedBookId = document.getElementById("issuedBookId");
const issueBookForm = document.getElementById("issueBookForm");
const bookIdInput = document.getElementById("bookIdInput");
const issueBookButton = document.getElementById("issueBookButton");
const submissionDate = document.getElementById("submissionDate");

fetchButton.addEventListener("click", async () => {
    const empID = empIDInputs.value;
    if (empID) {
        const teacherDoc = doc(db, "Teacher Data", empID);
        const studentSnapshot = await getDoc(teacherDoc);

        if (teacherSnapshot.exists()) {
            const teacherData = teacherSnapshot.data();
            teacherName.textContent = teacherData.Name;
            empID.textContent = teacherData.empID;
            DOB.textContent = teacherData.DOB
            issuedBookId.textContent = studentData.issuedBookId || "None";

            if (!studentData.issuedBookId) {
                issueBookForm.classList.remove("hidden");
            } else {
                issueBookForm.classList.add("hidden");
            }

            detailsContainer.classList.remove("hidden");
        } else {
            detailsContainer.classList.add("hidden");
            alert("Student not found.");
        }
    }
});