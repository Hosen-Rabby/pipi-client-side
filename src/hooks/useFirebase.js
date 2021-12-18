import { useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.initialize';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

// initialize firebase app.
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // register user

    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError('Email id already taken.');

            })
            .finally(() => setLoading(false));
    }

    // login user

    const logInUser = (email, password, location, navigate) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                // const destination = location?.state?.from || '/';
                // navigate.replace(destination)
            })
            .catch((error) => {
                setAuthError('Please enter right email or password.');
            })
            .finally(() => setLoading(false));

    }

    // logout user

    const logOutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setLoading(false));

    }

    // on auth change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                //  if user login
                setUser(user);
            } else {
                // User is signed out
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        loading,
        authError,
        registerUser,
        logInUser,
        logOutUser,
    }

}

export default useFirebase;