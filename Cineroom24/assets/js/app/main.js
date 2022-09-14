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
  
  
  var current_user = "";  
  // kullanıcı uid leri
  
  
  function send_verification(){
			  
			  var user = firebase.auth().current_user;
			  
				user.sendEmailVerification().then(function(){
					
					window.alert("Verifiaction Sent");
					
				}).catch(function(error){
					
					alert("Hata");
				
		  });
		  
		  }
  
  
  firebase.auth().onAuthStateChanged(function(user){
	  
	  if(user){
		  
		  current_user = user.uid;
		  
		  $("#logout").click(function(){
			  
			  firebase.auth().signOut()
				.then(function(){
					window.location.href = "index.html";
				})
				alert("Çıkış Yapıldı");
		  })
		  
		  
		  
		  
		  
		  
		  
	$("#sendToFireBase").click(function(){    
	// verileri firebase realtime database e taşıt
		
		  var ad = $("#ad").val();
		  var telefon = $("#telefon").val();
		  var email = $("#email").val();
		  var tarih = $("#tarih").val();
	      var saat = $("#saat").val();
	      var yiyecek = $("#yiyecek").val();
		  var içecek = $("#içecek").val();
		  var istek = $("#istek").val();
		 
		  
		  
		  firebase.database().ref().child("users").child(current_user).child("rezervasyon").push(
		  {
			ad : ad ,
			telefon : telefon,
			email:email,
			tarih : tarih,
			saat : saat,
			yiyecek : yiyecek,
			içecek : içecek,
			istek : istek,
		  
		  } 
		  );
		  
		  alert("Rezervasyon İşleminiz Alınmıştır");
		  
	$("#ad").val("");
	$("#telefon").val("");
	$("#email").val("");
	$("#tarih").val("");
	$("#saat").val("");
	$("#yiyecek").val("");
	$("#içecek").val("");
	$("#istek").val("");
	
	
	
		 })

	  }
	  
  }) 
 
 }) 	  