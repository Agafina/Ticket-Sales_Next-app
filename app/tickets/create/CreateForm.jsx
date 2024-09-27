"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function CreateForm() {

    const router = useRouter()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true);
        const ticket = {
            title,body,priority, userEmail:"atsafacagafina@gmail.com"
        }
        const res = await fetch('http://localhost:5000/tickets', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(ticket)
        })
        if(res.status === 201){
            router.refresh()
            router.push('/tickets')
        }

    }
  return (
    <form onSubmit={handleSubmit} className='w-1/2'>
        <label>
            <span>Title:</span>
            <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </label>
        <label>
            <span>Body:</span>
            <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
        </label>
        <label>
            <span>Priority:</span>
            <select 
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            >
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
            </select>
        </label>

        <button
        className='btn-primary'
        disabled={isLoading}
        >
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add a Ticket</span>}
        </button>
    </form>
  )
}
