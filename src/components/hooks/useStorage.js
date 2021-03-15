import {FirebaseStorage} from "../firebase_/index"
import UseFirestore from "./useFirestore"

const UseStorage = (file, user) => {
	const FirebaseStorageRef = FirebaseStorage.ref()
	let metadata = {'contentType':file.type}
	FirebaseStorageRef.child('images/'+file.name).put(file, metadata).then(snapshot=>{
		console.log('Uploaded:', snapshot.totalBytes, 'bytes.');
        //console.log('File metadata:', snapshot.metadata);
        snapshot.ref.getDownloadURL().then((url)=>{
          UseFirestore(url, file.name, user.displayName)
        });
	})
}

export default UseStorage;
