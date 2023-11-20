import { getPostsMeta, getPostByName } from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props ={
  params: {
    postId: string,
  }
}

export default async function Articles({params: {postId}}: Props) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  // const posts: BlogPosts = await res.json();
  const post = await getPostByName(`${postId}.mdx`)

  if (!post) notFound()

  const { meta, content } = post

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <div>
        <h2 className="text-xl font-bold text-slate-100 pb-4">{meta.title}</h2>
        <article className='text-slate-300'>{content} </article>

        <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
    </div>
  )
}
