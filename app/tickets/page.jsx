import React, { Suspense } from 'react'
import ListItems from './ListItems'
import Loading from '../loading'

export default function TicketsPage() {
  return (
   <main>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently open tickets</small></p>
            </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <ListItems />
        </Suspense>
   </main>
  )
}
