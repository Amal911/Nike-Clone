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
        const dbref = db.ref();


        let LoginForm = document.getElementById('LoginForm');
        let Email = document.getElementById('email-input');
        let Password = document.getElementById('password-input');
       

        let loginUser = evt => {
            evt.preventDefault();
            console.log(Email.value);

            auth.signInWithEmailAndPassword(Email.value, Password.value)

                .then((credentials) => {
                    
                    // get(child(dbref,'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
                        dbref.once("value").then((snapshot) =>{
                        if(snapshot.exists){
                            sessionStorage.setItem("user-info", JSON.stringify({
                                FirstName:snapshot.val().FirstName,
                                LastName:snapshot.val().LastName
                            }))
                            sessionStorage.setItem('user-creds',JSON.stringify(credentials.user))
                            console.log("loginsusess")
                            
                            window.location.href='../index.html';
                            // let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
                            // let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));
                            // let showingmail=document.getElementById('h2')
                            // let Signout = ()=>{
                            //     sessionStorage.removeItem('user-creds');
                            //     sessionStorage.removeItem('user-info');
                            //     windows.location.href='newlogin.html';
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