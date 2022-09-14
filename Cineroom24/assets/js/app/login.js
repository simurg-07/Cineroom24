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


    $("#loginBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
				
		var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
         // Email sent.
		}).catch(function(error) {
          // An error happened.
});
                window.location.href = "Rezervasyon.html";
            
			alert("Giriş Yapıldı");
			
			}).catch(function(error){
                alert(error.message);
        })


    })

})