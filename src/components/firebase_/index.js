import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const FirebaseStorage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

const UserDoc = async (id) => {
  if (!id) return null;
  try {
    const userDocument = await firestore.doc(`users/${id}`).get();

    return {
      id,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export const CreateDoc = async (user) => {
  if (!user || user === null) return;

  const userDoc = firestore.collection("users").doc(user.uid);
  const snapshot = await userDoc.get();
  if (!snapshot.exists) {
    console.log("inexisting");
    const { email, displayName } = user;
    await userDoc.set({
      email,
      displayName,
      images: []
    });
  }

  return UserDoc(user.uid);
};
