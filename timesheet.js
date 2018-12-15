

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC53qYpqPfRKlF2dio7So5nBri6yCWirKQ",
    authDomain: "database-6757f.firebaseapp.com",
    databaseURL: "https://database-6757f.firebaseio.com",
    projectId: "database-6757f",
    storageBucket: "database-6757f.appspot.com",
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

    // var userDataUnix = userDate.format();
    // console.log(userDataUnix);

    // Code for handling the push
    database.ref().push({
        name: userName,
        role: userRole,
        date: userDate,
        rate: userRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();


    //.text replaces the text on a  page
    // Console.logging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.date);
    console.log(sv.rate);
    console.log(sv.dateAdded);

    // var subtracted = moment().subtract(sv.date).format("month");
    var subtracted = moment().diff(sv.date, 'months');

    console.log("Moment =" + moment().format('MM/DD/YYYY'));
    console.log("UserMonth =" + subtracted);

    var total = subtracted * sv.rate;

    // Change the HTML to reflect
    $("tbody").append("<tr>  <td > " + sv.name + " </td>" +
        "<td> " + sv.role + " </td>" +
        "<td> " + sv.date + " </td>" +
        "<td> " + subtracted + " </td>" +
        "<td>  $" + sv.rate + " </td>" +
        "<td>  $" + total + " </td> </tr>"
    );



    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});