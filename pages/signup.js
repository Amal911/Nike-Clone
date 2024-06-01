const firebaseConfig = {
    apiKey: "AIzaSyAYOUsJhnAWF235urO4rWXiJNTgKamIXCs",
    authDomain: "nike-clone-c321d.firebaseapp.com",
    projectId: "nike-clone-c321d",
    storageBucket: "nike-clone-c321d.appspot.com",
    messagingSenderId: "16342611896",
    appId: "1:16342611896:web:47f047166bf3feeb71014d",
    measurementId: "G-W3GMVQ6VB4"
};
const app = firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const db = firebase.database();
// const db = firebase.getDatabase();
// const auth = firebase.getAuth(app);
const auth = firebase.auth(app);

let SignUpForm = document.getElementById('SignUpForm');
let Email = document.getElementById('email-input');
let Password = document.getElementById('password-input');
let FirstName = document.getElementById('f-name');
let LastName = document.getElementById('l-name');

let createUser = evt => {
    evt.preventDefault();
    console.log(Email.value);
    auth.createUserWithEmailAndPassword( Email.value, Password.value)

        .then((credentials) => {
            db.ref('UsersAuthList/' + credentials.user.uid).set({
            // set(ref(db, 'UsersAuthList/' + credentials.user.uid), {
                FirstName: FirstName.value,
                LastName: LastName.value
            });
            console.log("registration success please log in")
            window.location.href='./login.html'
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}
SignUpForm.addEventListener('submit', createUser);