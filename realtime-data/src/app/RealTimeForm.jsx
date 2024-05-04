'use client';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from "react";
import { db } from './firebaseConfig';

export default function RealTimeForm() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    async function addData(name, message) {
        try {
            const docRef = await addDoc(collection(db, 'message'), { name, message });
            console.log("Document written with ID:", docRef.id);
        } catch (error) {
            console.error("Error adding document", error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await addData(name, message);
            // Reset form fields after successful submission
            setName('');
            setMessage('');
        } catch (error) {
            console.error("Error submitting form", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '10px', color: 'white' }}>
                Name:
                <input type="text" id="name" value={name} style={{ width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '10px', color: 'white' }}>
                Message:
                <textarea name="message" id="message" value={message} style={{ width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>
            <button style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Submit</button>
        </form>
    );
}
