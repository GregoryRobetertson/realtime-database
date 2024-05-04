'use client';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";

export default function RealTimeDisplay() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'message'), (snapshot) => {
            const messageArray = [];
            snapshot.forEach((doc) => {
                messageArray.push({ id: doc.id, ...doc.data() });
            });
            setMessages(messageArray);
        });


        return () => unsubscribe();
    }, []);
return (
    <div>
        {messages.map((message) => {
<li key={message.id}>
<h3>{message.name}</h3>
<p>{message.message}</p>
</li>
        })}
    </div>
)
}