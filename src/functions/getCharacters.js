import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

async function getCharacters(){
const characters = [];

 const charactersFetched = await getDocs(collection(db, 'characters'));
 charactersFetched.forEach((character)=> characters.push(character.data()))
 return characters; 
}


export default getCharacters;