'use client';
import {addDoc, collection} from 'firebase/firestore';
import { useState } from "react";
import { db } from './firebaseConfig';

export default function RealTimeForm() {
const [name, setName] = useState('');
const [message, setMessage] = useState('');

async function addData(name, message) {
    try {
        const docRef = await addDoc(collection(db, 'message'), {
            name: name,
            message: message
        })
        console.log("Document written with ID:", docRef.id)
    } catch (error) {
        console.error("Error adding document", error);
        return false;
    }

    const handleSubmit = async (e) => {
        if (added) {
            setName("");
            setMessage("");
            alert('Data added to db');
        }
    }
} 

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name:
            <input type="text" id="name"  onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="message">
            Message:
            <textarea name="message" id="message onChange={(e) => setMessage(e.target.value)}"></textarea>
          
        </label>
        <button>Submit</button>
        </form>
    )
}