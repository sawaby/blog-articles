'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTopicContext } from "../context/menu-context";
type Props = {
  post: Meta;
  additionalStyle: string;
};

export default function SideNav({ post, additionalStyle }: Props) {
  const { id, title, date } = post;
  const {topic, setTopic} = useTopicContext();
  const [locaStorageTopic, setLocalStorageTopic] = useState("");
  let startPath: boolean = false;

  useEffect(() => {
    const locaStorageTopic = localStorage.getItem("topic");
    if(locaStorageTopic){
      setLocalStorageTopic(locaStorageTopic)
    }
    
    console.log("use effect get locastorage: ", locaStorageTopic)
  }, [topic]);
  // console.log(id);
  if (topic.localeCompare(locaStorageTopic.toLocaleLowerCase())){
    startPath = id.startsWith(locaStorageTopic.toLowerCase());
  }
  //  console.log("starts with : ", startPath)
  return (
    <>
    { startPath &&
        <div key={post.id} className={`p-1 hover:text-white ${additionalStyle}`}>
          <div>
            <Link href={`/posts/${id}`}>{title}</Link>
          </div>
        </div>
      }
    </>
  );
}
