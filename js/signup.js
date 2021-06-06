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

var signup = document.querySelector('#signup1');
signup.addEventListener('click', function (event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    const promise=auth.createUserWithEmailAndPassword(email.value,pw.value);
    promise.catch(e =>alert(e.message));
  
    alert('account created!');
});


// var signin = document.querySelector('#signin');
// signin.addEventListener('click', function (event) {
//     event.preventDefault();
//     var email = document.getElementById('email');
//     var pw = document.getElementById('pw');
//     const promise=auth.signInWithEmailAndPassword(email.value,pw.value);
//     promise.catch(e =>alert(e.message));
  
//     alert('successfully logged in!');
//     window.location.href= "../index.html";
// });


//------------------------------------------------------------

// var signup = document.getElementById('signup');

// signup.addEventListener('click', function (event) {
 
//     var email = document.getElementById('email').value;
//     var pw = document.getElementById('pw').value;
//     var con_pw = document.getElementById('con_pw').value;
//     var show = document.getElementById('show');
//     var show1 = document.getElementById('show1');

//     if (pw !== con_pw) {
//         show.style.display = 'block';
//         event.preventDefault();
//     } else if (pw === '' || email === '' || con_pw === '') {
//         show1.style.display = 'block';
//         event.preventDefault();
//     } else {
//         localStorage.setItem('email', email);
//         localStorage.setItem('pass', pw);
//         alert('account created!');
//     }
// });

// var signin = document.getElementById('signin');

// signin.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = 'login.html';
// });