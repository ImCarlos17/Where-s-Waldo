import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const postUsers = async (playerData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), playerData);
  } catch (error) {
    console.error(error);
  }
};

export default postUsers;
