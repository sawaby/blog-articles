import React from 'react'
import { getPostsMeta } from '../lib/posts'
export default async function CallingPostsMeta() {
    const posts = await getPostsMeta();

    if (!posts) {
        return <p className='p-10'>
            No Posts Available
        </p>
    }

    console.log(posts)

  return (
    <div>callingPostsMeta</div>
  )
}
