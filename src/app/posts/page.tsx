import React from 'react'

type Props ={
  params: {
    topic: string,
  }
}
//  display introduction based on topic *todo
export default function page({params: {topic}}: Props) {
  console.log("topic in main post page: ", topic)
  return (
    <div className='mt-20 md:mt-auto'></div>
  )
}
