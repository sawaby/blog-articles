import React from 'react'

type Props ={
  params: {
    topic: string,
  }
}
//  display introduction based on topic *todo
export default function page() {
  let getData:string =""
  if (typeof window !== 'undefined'){
    getData = JSON.parse(localStorage.getItem("topic")!);
    console.log("topic from page server is: ", getData);
  }
  console.log("topic in main post page: ", getData)
  return (
    <div className='mt-20 md:mt-auto'>{getData}</div>
  )
}
