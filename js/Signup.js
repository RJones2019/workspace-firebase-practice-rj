var firebaseConfig = {
  apiKey: "AIzaSyBl7J7Wd1Zq6_oa10KIlBp7OO4R-K5ar-k",
  authDomain: "csci225rj.firebaseapp.com",
  projectId: "csci225rj",
  storageBucket: "csci225rj.appspot.com",
  messagingSenderId: "120469188494",
  appId: "1:120469188494:web:f9a3c3d66a60ebd4913edf",
  measurementId: "G-M0CVZ5C5Z8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input [name='username']").val();
  console.log('email you typed is'+email);
  var password = $("signup-form input [password='password']").val();

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
