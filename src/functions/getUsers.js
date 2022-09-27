import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const getUsers = async () => {
  const users = [];
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((user) => {
      users.push(user.data());
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

getUsers();

export default getUsers;
