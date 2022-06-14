import firebase, {app} from "../firebaseConfig";

const auth = app.auth();

const db = app.firestore();

const register = async (name: string, email: string, password: string) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection('users')
        .add({
            uid: user?.uid,
            name,
            authProvider: "local",
            email
        })
    } catch(error) {
        let Message = "Failed registration!";
        if (error instanceof Error) {
            Message = error.message;
        }
        console.log(Message);
    }
}

const logout = () => {
    auth.signOut();
}

const signIn = async (email: string, password: string) => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
    } catch(error) {
        let Message = "Failed login!";
        if(error instanceof Error) {
            Message = error.message;
        }
        console.log(Message);
    }
}

const resetPassword = async (email: string) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert('Password reset link has been sent to your e-mail')
    } catch(error) {
        console.log(error);
    }
}

export default firebase;

export {
    auth,
    db,
    register,
    logout,
    signIn,
    resetPassword
};