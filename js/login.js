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
const db = firebase.database();
const auth = firebase.auth(app);

const dbref = db.ref('UsersAuthList');


// const userAuthList = dbref + 'UsersAuthList/'


let LoginForm = document.getElementById('LoginForm');
let Email = document.getElementById('email-input');
let Password = document.getElementById('password-input');





let loginUser = evt => {
    evt.preventDefault();
    console.log(Email.value);
    const currentEmail=Email.value;


    auth.signInWithEmailAndPassword(Email.value, Password.value)

        .then((credentials) => {

            firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            // User logged in already or has just logged in.
                            console.log(user.uid);
                            
                        }else{
                            console.log("user logged out");
                        }
                    });

            // get(child(dbref,'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
            dbref.on('child_added', (snapshot) => {
                

                
                

                if (snapshot.exists) {
                    const userdata = snapshot.val();
                if(currentEmail===userdata.Email)
                {
                    console.log("email validated");
                    console.log(userdata.Email)
                    sessionStorage.setItem("user-info", JSON.stringify({
                            FirstName: userdata.FirstName,
                            LastName: userdata.LastName
                            
                        }))
                }
                    
                        
                        console.log("snap exist");
                        // sessionStorage.setItem("user-info", JSON.stringify({
                        //     FirstName: userdata.FirstName,
                        //     LastName: userdata.LastName
                            
                        // }))

                        sessionStorage.setItem('user-creds', JSON.stringify(credentials.user))
                        console.log()
                        console.log("login success")




                        window.location.href='../index.html';

                        // let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
                        // let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));
                        // let showingmail=document.getElementById('h2')
                        // let Signout = ()=>{
                        //     sessionStorage.removeItem('user-creds');
                        //     sessionStorage.removeItem('user-info');
                        //     windows.location.href='/pages/newlogin.html';
                        // }

                        // let checkcred = () =>{
                        //     if(!sessionStorage.getItem("user-creds"))
                        //     windows.location.href='newlogin.html'
                        // else{
                        //     showingmail.innerHTML = `user email is"${UserCreds.Email}" logged in`;

                        // }
                        // }
                        // window.addEventListener('load',checkcred);
                        // signoutbutton.addEventListener('click',Signout)


                    }
            })
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}
LoginForm.addEventListener('submit', loginUser);