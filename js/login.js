
// firebase for firebase auth

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCpABFhi6Am1OgA6GCWmkjDtfjyMEAoJUE",
    authDomain: "form-cf286.firebaseapp.com",
    projectId: "form-cf286",
    storageBucket: "form-cf286.appspot.com",
    messagingSenderId: "675931614185",
    appId: "1:675931614185:web:de3865c36802b686b03978"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//auth
const auth= firebase.auth();


//actually w firebase

var signin = document.querySelector('#signin');
signin.addEventListener('click', function (event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    const promise=auth.signInWithEmailAndPassword(email.value,pw.value);
    promise.catch(e =>alert(e.message));
  
    alert('successfully logged in!');
    window.location.href= "../index.html";
});

//------------------------------------------------------------














// signin.addEventListener("click", function()
// {
//     var ae=localStorage.getItem("email");
//     var ap=localStorage.getItem("pass");
//     var email=document.getElementById("email").value;
//     var pw=document.getElementById("pw").value;
//     var show=document.getElementById("show");
    

//     if(ae === email && ap===pw)
//     {
//         //change the location of it by connecting to another page 
//         // by 
//         alert("login successful");
//         window.location.href= "../index.html"
        
//     }
//     else{   
//         show.style.display="block";
    
//     }
// })