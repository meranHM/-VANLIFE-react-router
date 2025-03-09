import { Credentials, LoginError } from "./types"
import { initializeApp } from "firebase/app"
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAVqp03F-XpDZhKNG0VM-hAFi4q_dQiYHo",
  authDomain: "vanlife-2c1ff.firebaseapp.com",
  projectId: "vanlife-2c1ff",
  storageBucket: "vanlife-2c1ff.firebasestorage.app",
  messagingSenderId: "845133431028",
  appId: "1:845133431028:web:f509671a73b4af0e66dea1",
  measurementId: "G-M9JGMH1J91"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}


export async function getVan(id: string) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)

    return {...vanSnapshot.data(), id: vanSnapshot.id}
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}


export async function loginUser(creds: Credentials) {
    if (!creds.email || !creds.password) {
        throw {
            message: "Email and password are required.",
            statusText: "Bad Request",
            status: 400
        } as LoginError
    }

    const res = await fetch("/api/login", 
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        } as LoginError
    }

    return data
}
