import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main>
        <div className='text-center'>
            <h3 className='text-3xl text-primary'>Oh oh ! Its like there is Ticket Problem</h3>
            <p>We could not find the ticket details you are looking for.</p>
            <p>Go back to Ticket Link <Link href="/tickets">Tickets</Link></p>
        </div>
    </main>
  )
}
