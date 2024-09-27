import Link from 'next/link';
import React from 'react'
 
    async function getTickets(){

        await new Promise(resolve => setTimeout(resolve, 3000));

        const res = await fetch('http://localhost:5000/tickets',{
            next:{
                revalidate: 0 
            }
        });

        return res.json();
    }


export default async function ListItems() {
    const tickets  = await getTickets();
  return (
    <>
    {
        tickets.map((ticket) => (
           <Link href={`/tickets/${ticket.id}`}>
             <div key={ticket.id} className='card my-5'>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0,200)}...</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
           </Link>
        ))
    }
    {
        tickets.length === 0 && (
            <p>There are no open tickers ! yay</p>
        )
    }
    </>
  )
}
