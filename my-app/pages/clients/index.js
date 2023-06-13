import React from 'react'
import Link from 'next/link'

function ClientsPage() {
    const clients = [
        { id: 'max', name: 'Maximillion' },
        { id: 'manu', name: 'Manuel' },
    ];
  return (
    <div>ClientsPage
        <h1></h1>
        <ul>
            {clients.map((client) => {
                return (
                <>
                <li><Link href={`/clients/${client.id}`}>{client.name}</Link></li>
                </>
                )
            })}
        </ul>
    </div>
  )
}

export default ClientsPage