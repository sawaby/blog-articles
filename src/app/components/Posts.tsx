import { getPostsMeta } from "../lib/posts"
import SideNav from "./SideNav"

export default async function Posts() {
    const posts = await getPostsMeta();
    
    if (!posts) {
        return <p className="mt-6 text-center">No Posts Available.</p>
    }
  return (
    <section className="bg-primary border-secondary text-slate-300">
      <button aria-expanded="true" aria-controls="sidebar" className="md:hidden text-gray-600 hover:text-gray-900 cursor-pointer rounded">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>
    <div className="hidden md:flex h-screen mr-4 pr-10 flex-col md:w-60">
        <h4 className='text-2xl pb-2 mb-4 font-bold'>Topic</h4>

        <ul>
          {posts.map((post) => (
           <SideNav key={post.id} post={post}/>
          ))}
            
        </ul>
      </div>

   
    </section>
  )
}
