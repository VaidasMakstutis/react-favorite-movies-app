import { SetStateAction } from 'react';
import { IUserData } from '../Components/Register/Register';
import firebase from '../firebaseConfig';

export const getUserData = (user: firebase.User | null | undefined, setUser: { (value: SetStateAction<IUserData | null>): void; (arg0: firebase.firestore.DocumentData): void; }) => {
    try {
        firebase
            .firestore()
            .collection('users')
            .where("uid", "==", user?.uid)
            .get()
            .then((userData) => {setUser(userData.docs[0].data()) })
            
    }catch(error){
        console.log(error)
    }
}