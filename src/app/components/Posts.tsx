import { getPostsMeta } from "../lib/posts";
import SideNav from "./SideNav";
import { ImMenu3 } from "react-icons/im";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-6 text-center">No Posts Available.</p>;
  }

  return (
    <section className="bg-primary text-slate-400">
       {/* <div className="sticky z-10 border-b py-3 px-4 backdrop-blur-sm backdrop-saturate-200 bg-black/50 md:hidden">
          <div className="flex flex-col justify-between">
            
            <ImMenu3 />

              <span>Menu</span>
          
          </div>
        </div> */}
        <div className="sticky z-10 top-0 border-b py-3 px-4 backdrop-blur-sm backdrop-saturate-200 bg-black/50 md:hidden">
          <div className="flex flex-col justify-between">
            <button className="md:hidden text-gray-600 hover:text-gray-900 cursor-pointer rounded ">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      <div className="hidden md:flex h-screen mr-4 pr-10 flex-col md:w-60">
        <h4 className="text-2xl pb-2 mb-4 font-bold">Topic</h4>
        <ul>
          {posts.map((post) => (
            <SideNav key={post.id} post={post} additionalStyle="" />
          ))}
        </ul>
      </div>
    </section>
  );
}
