import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { addDoc,
    collection,
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBj5_DcuS8fS1qmuOK1Cwf3_Dp-QflG8Q8",
  authDomain: "netflix-clone-9fa86.firebaseapp.com",
  projectId: "netflix-clone-9fa86",
  storageBucket: "netflix-clone-9fa86.firebasestorage.app",
  messagingSenderId: "574097632939",
  appId: "1:574097632939:web:d938be327c89e8997151ee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};


const login = async(email,password)=>{
  try{
      await signInWithEmailAndPassword(auth,email,password)
  } catch(error){
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = ()=>{
  signOut(auth);
}

export{auth,db,login,signup,logout};
