import React from 'react'
import { useRouter } from 'next/router';

function ClientProjextsPage() {
    const router = useRouter();

    function loadProjectHandler(){
        router.push(`/clients/${router.query.id}/Project1`);
    }

  return (
    <div>
        <h1>The Specific Projects of {router.query.id}</h1>
        <button onClick={loadProjectHandler}>Load Project 1</button>
    </div>
  )
}

export default ClientProjextsPage