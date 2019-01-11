firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('status').innerHTML="Signed in"
        document.getElementById('form').style.display="none"
        document.getElementById('logout').style.display="block"
    } else {
        document.getElementById('status').innerHTML="Failed"
        document.getElementById('form').style.display="block"
        document.getElementById('logout').style.display="none"
    }
});

function login(){
    // window.alert('itsworking..!')
    var email =document.getElementById('email').value;
    var password=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}

function logout(){
    firebase.auth().signOut();
}