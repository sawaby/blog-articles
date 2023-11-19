
type Props ={
  params: {
    postId: string,
  }
}

export default async function Articles({params: {postId}}: Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const posts: BlogPosts = await res.json();

  return (
    <div>
        <h2 className="text-xl font-bold text-slate-100 pb-4">{posts.title}</h2>
        <p className='text-slate-300'>{posts.body} </p>
    </div>
  )
}
