
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC28gnb6LShoZlMWPEgIhk1XIRiSAngBWs",
    authDomain: "portfolio-guestbook.firebaseapp.com",
    databaseURL: "https://portfolio-guestbook.firebaseio.com",
    projectId: "portfolio-guestbook",
    storageBucket: "portfolio-guestbook.appspot.com",
    messagingSenderId: "937224064173",
    appId: "1:937224064173:web:e47f8131140027ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();
  var firstName = "";
  var lastName = "test";
  var email = "";
  var info = "";

  $("#addGuest").on("click", function(event){
    event.preventDefault();

    firstName = $("#firstName").val();
    lastName = $("#lastName").val();
    email = $("#email").val();
    info = $("#info").val();

    database.ref().push({
        firstName,
        lastName,
        email,
        info,
    });

    $("#firstName").val('');
    $("#lastName").val('');
    $("#email").val('');
    $("#info").val('');
   return false;
  });