import { firestore } from "../firebase_/index";

const UseFirestore = async (url, name, user) => {
  await firestore.collection(user).doc(name).set({
    url: url,
    user: user
  })
  alert("Uploaded")
};

export default UseFirestore;