'use client'
import Link from "next/link";
import { useTopicContext } from "../context/menu-context";
type Props = {
  post: Meta;
  additionalStyle: string;
};

export default function SideNav({ post, additionalStyle }: Props) {
  const { id, title, date } = post;
  const {topic, setTopic} = useTopicContext();

  console.log(id);
  const startPath = id.startsWith(topic.toLowerCase());
  console.log("starts with : ", startPath)
  return (
    <>
    {
      startPath && 
      <div key={post.id} className={`p-1 hover:text-white ${additionalStyle}`}>
      <div>
        <Link href={`/posts/${id}`}>{title}</Link>
      </div>
    </div>
    
  }
    </>
  );
}
