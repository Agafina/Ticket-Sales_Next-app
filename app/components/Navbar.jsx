import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
      <nav>
        <Image 
        src={Logo}
        alt='Dojo Logo'
        quality={100}
        width={70}
        placeholder='blur'
        />
        <h2>Dojo-Helpdesk</h2>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create</Link>
      </nav>
  )
}
