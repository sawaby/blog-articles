import Link from 'next/link'

type Props = {
  post: Meta,
  additionalStyle: string,
}

export default async function SideNav({post, additionalStyle}: Props) {
  const { id, title, date } = post
  
  return (
    <div key={post.id} className={`p-1 text-sm hover:text-white ${additionalStyle}`}>
      <div>
      <Link href={`/posts/${id}`} >{title}</Link>
      </div>
      
    </div>
  )
}
