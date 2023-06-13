import React from 'react'
import { useRouter } from 'next/router'

function BlogPostPage() {
    const router = useRouter()

    console.log(router.query)
  return (
    <>
      {router.query.slug ? <div>Year:{router.query.slug[0]}, Date:{router.query.slug[1]}</div> : null}
     </>
  )
}

export default BlogPostPage