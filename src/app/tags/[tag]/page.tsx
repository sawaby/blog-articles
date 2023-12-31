
import { getPostsMeta } from "@/app/lib/posts";
import SideNav from "@/app/components/SideNav";
import Link from "next/link";
import { useTopicContext } from "@/app/context/menu-context";

export const revalidate = 0

type Props = {
    params: {
        tag: string,
    }
}



// export async function generateStaticParams(){
//     const posts = await getPostsMeta();

//     if (!posts) return []
//     // get array of tags and flatten it and put it in a new set to remove duplicates
//     const tags = new Set(posts.map(post => post.tags).flat());
//     // create array of objects and return it
//     return Array.from(tags).map((tag) => ({ tag }))
// }


export default async function TagPostList({ params: { tag }}: Props) {
    const {topic, setTopic} = useTopicContext();
    console.log("this is topic to be passed tag page file: ", topic)
    const posts = await getPostsMeta(topic)

    if (!posts) return <p className="mt-10 text-center">No posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">
                    No posts for that keyword.
                </p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
            <section className="mt-6 mx-auto max-w-2xl">
                <div >
                    {tagPosts.map(post => (
                        <SideNav key={post.id} post={post} additionalStyle="p-8 border border-zinc-800 m-10 rounded-lg text-center max-w-sm shadow-md shadow-slate-800/50 hover:shadow-xl hover:shadow-slate-800/50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-950 duration-300" />
                    ))}
                </div>
            </section>
        </>
    )
}