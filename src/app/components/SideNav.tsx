import Link from "next/link";

type Props = {
  post: Meta;
  additionalStyle: string;
};

export default function SideNav({ post, additionalStyle }: Props) {
  const { id, title, date } = post;
  // console.log("id ", id)

  return (
    <div key={post.id} className={`p-1 hover:text-white ${additionalStyle}`}>
      <div>
        <Link href={`/posts/${id}`}>{title}</Link>
      </div>
    </div>
  );
}
