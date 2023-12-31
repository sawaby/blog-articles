import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css';

export const revalidate = 0

type Props ={
  params: {
    topic: string,
    postId: string,
  }
}

export default async function Articles({params: {topic, postId}}: Props) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  // const posts: BlogPosts = await res.json();

  // console.log('postid ', postId)
  // const postName = postId.split('/')[1]
  //   console.log('post name in page: ', postName)
  const post = await getPostByName(`${topic}/${postId}.mdx`)

  if (!post) notFound()

  const { meta, content } = post

  const tags = meta.tags.map((tag, i) => (
    <div  key={i}  className="px-10 py-4 mb-4 border border-zinc-800 rounded-lg text-center max-w-sm shadow-md shadow-slate-800/50 hover:shadow-xl hover:shadow-slate-800/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-950 duration-300">
      <Link href={`/tags/${tag}`}>{tag}</Link>
    </div>
    
  ))

  return (
    
      <div className="md:pl-10 flex flex-col justify-between overflow-auto md:px-0 px-4">
        <div>
          <h2 className="md:text-xl md:font-bold font-semibold text-2xl text-slate-200 pb-6">{meta.title}</h2>
          <article className='text-slate-300 text-lg md:text-base'>{content} </article>
        </div>
       

        <section>
                <h3>Related:</h3>
                <div className="md:flex md:flex-row md:gap-4 text-slate-600 hover:text-slate-500">
                    {tags}
                </div>
            </section>
     </div>
    
  )
}
