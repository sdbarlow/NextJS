import React from 'react'
import { useRouter } from 'next/router'

function SelectedClientProjectPage() {
    const router = useRouter()
    console.log(router.query)

  return (
    <div>{router.query.id}'s {router.query.clientprojectid}</div>
  )
}

export default SelectedClientProjectPage