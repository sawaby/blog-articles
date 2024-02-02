import React from 'react'

type Props ={
  params: {
    topic: string,
  }
}
//  display introduction based on topic *todo
export default function page() {
  let getData:string =""
  // set a delay time to wait for window to be ready Note: this didn't work out, so I have to change it next time.
  setTimeout(
    () => {
      if (typeof window !== 'undefined'){
        getData = JSON.parse(localStorage.getItem("topic")!);
        console.log("topic from page server is: ", getData);
      }
    }
    , 2000)
  console.log("topic in main post page: ", getData)
  return (
    <div className='mt-20 md:mt-auto'>{getData}</div>
  )
}
