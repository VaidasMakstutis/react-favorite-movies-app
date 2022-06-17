import firebase from '../firebaseConfig';

export const getUserData = (user: firebase.User, 
    setUserData: (value: any) => void) => {
    try {
        firebase
            .firestore()
            .collection('users')
            .where("uid", "==", user?.uid)
            .get()
            .then((userData) => {setUserData(userData.docs[0].data()) })
            
    }catch(error){
        console.log(error)
    }
}