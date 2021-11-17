// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault(); 
  console.log("here");
  var inputdata=$('.sampleSurvey').serializeArray();
  console.log(inputdata);
  var inputJson={};
  inputdata.forEach((data)=>{
  console.log(data.name);
  console.log(data.value);
  inputJson[data.name]=data.value;
  });
// save the data to database

firebase.firestore().collection("surveydatabase").add(inputJson);

});
// update the result in table

firebase
  .firestore()
  .collection("surveydatabase")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
    switch('choice'){
      case 0: $(".ans1")+1;
      case 1: $(".ans2")+1;
      case 2: $(".ans3")+1;
      case 3: $(".ans4")+1;
      case 4: $(".ans5")+1;
    }
  });