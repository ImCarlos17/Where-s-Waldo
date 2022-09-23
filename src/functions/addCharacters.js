import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

 const addCharacters = async (character) => {
    try {
        const docRef = await addDoc(collection(db, "characters"), 
          character
        );
      } catch (error) {
        console.error(error);
      }
}

export default addCharacters;