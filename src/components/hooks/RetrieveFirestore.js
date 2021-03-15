import { firestore } from "../firebase_/index";
import { useState, useEffect } from 'react';

const RetrieveFirestore = (user) => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    firestore.collection(user.displayName)
      .onSnapshot((snapshot) => {
        setimages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  });
  return images
}

export default RetrieveFirestore
