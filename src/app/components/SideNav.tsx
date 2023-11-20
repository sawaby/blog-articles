import Link from 'next/link'

type Props = {
  post: Meta,
}

export default async function SideNav({post}: Props) {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts: BlogPosts[] = await res.json();
  // const result = posts.filter((p) => p.id < 21)
  const { id, title, date } = post
  
  return (
    // <div className="bg-primary border-secondary text-slate-300">
    //   <button aria-expanded="true" aria-controls="sidebar" className="md:hidden text-gray-600 hover:text-gray-900 cursor-pointer rounded">
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //         <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
    //     </svg>
    //   </button>
    // <div className="hidden md:flex h-screen mr-4 pr-10 flex-col md:w-60">
    //     <h4 className='text-2xl pb-2 mb-4 font-bold'>Topic</h4>

    //     <ul>
    //       {result.map((post) => (
            <li key={post.id} className="p-1 text-sm hover:text-white">
              <Link href={`/posts/${id}`} >{title}</Link>
            </li>
      //     ))}
            
      //   </ul>
      // </div>

   
    // </div>
  )
}
