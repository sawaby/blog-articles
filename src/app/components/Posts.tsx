// 'use client'
// import { useEffect, useState } from "react";
import { getPostsMeta } from "../lib/posts";
import SideNav from "./SideNav";
import SmallScreenSidebar from "./SmallScreenSidebar";
// import { useTopicContext } from "../context/menu-context";

// type Props = {
//   params: {
//       topic: string,
//   }
// }

export default async function Posts() {
  // const [ posts, setPosts ] = useState([]);
  // const posts: Meta[] | undefined = []; 
  // const posts: Meta[] | undefined =[];
  // useEffect(() => {
  //   const getPosts = async () => {
  //     console.log("topic in useeffect: ", topic)
  //     const apiCall = await getPostsMeta(topic);
  //     console.log("this is posts to be passed: ", apiCall)
  //     // posts.push(apiCall);
  //   };
  //   getPosts();

  //   return () => {

  //   };
   
  // }, [topic])
  
  const posts = await getPostsMeta()
  // const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-6 text-center">No Posts Available.</p>;
  }
  // console.log("posts ", posts)
  return (
    <div className=" text-slate-400">
      
      <SmallScreenSidebar posts={posts}/>
     
      <div className="hidden md:flex h-screen mr-4 pr-10 flex-col md:w-60">
        {/* <h4 className="text-2xl pb-2 mb-4 font-bold">Topic</h4> */}
        <ul>
          {posts.map((post) => (
            <SideNav key={post.id} post={post} additionalStyle="" />
          ))}
        </ul>
      </div>
    </div>
  );
}
