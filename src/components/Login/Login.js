import React from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig)

const Login = () => {
     const [user, setUser] = useState({
          isUserSignedIn: false,
          userName: '',
          userEmail: '',
          userPhoto: ''
     })

     //handle Google sign in
     const handleGoogleSignIn = () => {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
               .then((res) => {
                    const { displayName, email, photoURL } = res.user;
                    setUser({
                         isUserSignedIn: true,
                         userName: displayName,
                         userEmail: email,
                         userPhoto: photoURL
                    })
               })
     }

     //handleSignOut
     const handleSignOut = () => {
          const auth = getAuth();
          signOut(auth)
               .then((res) => {
                    setUser({
                         isUserSignedIn: false,
                         userName: '',
                         userEmail: '',
                         userPhoto: ''
                    })
               })
     }

     //login with GitHub
     const handleGHlogin = () => {
          const provider = new GithubAuthProvider();
          const auth = getAuth();
          signInWithPopup(auth, provider)
               .then((res) => {
                    const { photoURL, email } = res.user;
                    setUser({
                         isUserSignedIn: true,
                         userEmail: email,
                         userPhoto: photoURL
                    })
               })
     }

     const handleBlur = () => {

     }

     return (
          <div style={{ textAlign: "center" }}>
               {/* conditionally btn display */}
               {
                    user.isUserSignedIn ? <button onClick={handleSignOut}>LogOut</button> : <button onClick={handleGoogleSignIn}>Login With Google</button>
               }
               <button onClick={handleGHlogin}>Login With GitHub</button>
               {/* if user login with google */}
               {
                    user.isUserSignedIn && <div>
                         <h1>How are you doing {user.userName} ?</h1>
                         <p>{user.userEmail}</p>
                         <img src={user.userPhoto} alt="" />
                    </div>
               }

               {/* if user login with github */}
               {/* {
                    user.isUserSignedIn && <div>
                         <h1>GH Email:{user.userEmail}</h1>
                         <img src={user.userPhoto} alt="" />
                    </div>
               } */}
               <div style={{ marginTop: "5%" }}>
                    <form action="">
                         <input type="text" name='name' placeholder='Your Name' required onBlur={handleBlur} /><br /><br />
                         <input type="email" name='email' placeholder='Your Email' required onBlur={handleBlur} /><br /><br />
                         <input type="password" name='password' placeholder='Your Password' required onBlur={handleBlur} /><br /><br />
                         <button type='submit'>Submit</button>
                    </form>
               </div>
          </div>
     );
};

export default Login;