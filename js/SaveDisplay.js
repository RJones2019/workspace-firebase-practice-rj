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

  var inputdata=$('.simpleSurvey').serializeArray();
  inputdata.forEach((data)=>{
  console.log(data.name);
  console.log(data.value);


var inputJson={};
  for(var i=0;i<inputdata.length;i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    inputJson[n]=v;
    console.log(n+' '+v);
  }
  firebase.firestore().collection("surveydatabase").add(inputJson);

});
});
// update the result in table

