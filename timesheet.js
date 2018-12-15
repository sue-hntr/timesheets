 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC53qYpqPfRKlF2dio7So5nBri6yCWirKQ",
    authDomain: "database-6757f.firebaseapp.com",
    databaseURL: "https://database-6757f.firebaseio.com",
    projectId: "database-6757f",
    storageBucket: "",
    messagingSenderId: "12712949463"
  };
  
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Capture Button Click
$("#add-user").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    var userName = $("#name-input").val().trim()
    var userRole = $("#role-input").val().trim()
    var userDate = $("#date-input").val().trim()
    var userRate = $("#rate-input").val().trim()

    // Code for handling the push
    database.ref().push({
        name: userName,
        role: userRole,
        date: userDate,
        rate: userRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });



