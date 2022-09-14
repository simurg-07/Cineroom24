$(document).ready(function(){
   
  var firebaseConfig = {
    apiKey: "AIzaSyCj8FJdsl-pVq9fpjMV30MbFaw761OaCEg",
    authDomain: "cineroom24-c8cce.firebaseapp.com",
    databaseURL: "https://cineroom24-c8cce-default-rtdb.firebaseio.com",
    projectId: "cineroom24-c8cce",
    storageBucket: "cineroom24-c8cce.appspot.com",
    messagingSenderId: "918756758665",
    appId: "1:918756758665:web:bae374295e8886465d6258",
    measurementId: "G-S8QTB7MTHV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
						
                        window.location.href = "Rezervasyon.html";
						
                    })
				alert("Kaydınız Tamamalandı");

            }).catch(function(error){
                alert(error.message);
        })

    })


})