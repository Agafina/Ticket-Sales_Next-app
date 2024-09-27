import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main>
        <div className="text-center">
            <h3 className='text-3xl text-primary'>Opps! There was a problem</h3>
            <p>we could not find the page you are looking for </p>
            <p>Go back to the <Link href='/'>Dashboard</Link></p>
        </div>
    </main>
  )
}
