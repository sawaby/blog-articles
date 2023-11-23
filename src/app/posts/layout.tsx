
import Posts from '../components/Posts';


export default function PostsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className='flex'>
        <Posts />
      
        {children}
     
        
    </div>
  )
}
