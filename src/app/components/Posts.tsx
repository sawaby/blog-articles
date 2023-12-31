import { getPostsMeta } from "../lib/posts";
import SideNav from "./SideNav";
import SmallScreenSidebar from "./SmallScreenSidebar";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-6 text-center">No Posts Available.</p>;
  }
  
  return (
    <div className=" text-slate-400">
      
      <SmallScreenSidebar posts={posts}/>
     
      <div className="hidden md:flex h-screen mr-4 pr-10 flex-col md:w-60">
        <h4 className="text-2xl pb-2 mb-4 font-bold">Topic</h4>
        <ul>
          {posts.map((post) => (
            <SideNav key={post.id} post={post} additionalStyle="" />
          ))}
        </ul>
      </div>
    </div>
  );
}
