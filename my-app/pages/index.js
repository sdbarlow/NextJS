import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div>
        <h1>index</h1>
        <ul>
            <li><Link href="/portfolio">portfolio</Link></li>
            <li><Link href="/clients">clients</Link></li>
            <li><Link href="/blog">blog</Link></li>
        </ul>
    </div>
  )
}

export default index