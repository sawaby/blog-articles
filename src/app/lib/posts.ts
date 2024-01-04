import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "../components/Video";
import CustomImage from "../components/CustomImage";
// import { useTopicContext } from "../context/menu-context";
type Filetree = {
    "tree": [
        {
            "path": string,
        }
    ]
}
 const topic = 'python'
 
export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/sawaby/blogposts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    if (!res.ok) return undefined
    
    const rawMDX = await res.text()

    // console.log("rawMDX for post by name: ", rawMDX)
    
    if (rawMDX === '404: Not Found') return undefined
    
    const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({ 
        source: rawMDX, 
        components: {
            Video,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    //@ts-ignore
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            },
        }
    })

    
    const id = fileName.replace(/\.mdx$/, '')
    const blogPostObj: BlogPost = {
        meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags}, content
    }

    return blogPostObj
}



export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/sawaby/blogposts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    // console.log("topic lib: ", topic.toLowerCase())
    // const { topic, setTopic } = useTopicContext();
    // console.log("res from lib: ", res)
    if (!res.ok) return undefined

    const repoFiletree: Filetree = await res.json()
    // console.log('file tree', repoFiletree)
    const startPath = repoFiletree.tree.map(obj => obj.path).filter(path => path.startsWith(topic.toLowerCase()));
    // console.log('start path : ', startPath)
    const filesArray = startPath.map(obj => obj).filter(path => path.endsWith('.mdx'));

    // console.log(filesArray)
    
    const posts: Meta[] = []

    for (const file of filesArray) {
        // console.log("file name : ", file)

        const post = await getPostByName(file)
        
        if (post) {
            const { meta } = post
            posts.push(meta)
        }
    }
    return posts.sort((a, b) => a.toString().localeCompare(b.toString(), undefined, { numeric: true }));
    // return posts.sort((a, b) => a.title < b.title ? 1 : -1)

}