var firebaseConfig = {
  apiKey: "AIzaSyBl7J7Wd1Zq6_oa10KIlBp7OO4R-K5ar-k",
  authDomain: "csci225rj.firebaseapp.com",
  projectId: "csci225rj",
  storageBucket: "csci225rj.appspot.com",
  messagingSenderId: "120469188494",
  appId: "1:120469188494:web:7d80eaf13fd44518913edf",
  measurementId: "G-N8W4M8HZVG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* object examples 
*/
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
/**/

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  const inputdata=$("form").serializeArray();
  console.log(inputdata);
  
  /* save the data to database */
  var inputJson={};
  inputJson['name']="Rakeem"
  inputJson['checkin']="2021-11-15";
  inputJson['checkout']="2021-11-30";
  inputJson['numberofguests']="2";
  inputJson['typeofroom']="grand suite";
  firebase.firestore().collection("hotellist").add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotellist")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
