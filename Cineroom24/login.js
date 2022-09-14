
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
  
  const auth = firebase.auth()
  
  
  
  function signUp(){
	  var email = document.getElementById("email");
	  var password = document.getElementById("password");
	  
	  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	  promise.catch(e => alert(e.message));
	  
	  alert("Signed In")
	    
  }
  
  function signIn(){
	  var email = document.getElementById("email");
	  var password = document.getElementById("password");
	  
	  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	  promise.catch(e => alert(e.message));
	  
	  
	  
	  alert("Signed Up")
	    
  }
  
  function signOut() {
	  
	  auth.signOut();
	  alert("Signed")
	  
  }
  
  aut.onAutStateChanged(function(user){
	  
	  if(user){
		  var email = user.email;
		  alert(" Active user" + email);
		  
	  }
	  else
	  {
		  alert("sorry")
	  }
	  
	  
	  
	  
  });
  
  
