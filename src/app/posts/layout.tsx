
import Posts from '../components/Posts';


export default function PostsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className='flex flex-row'>
        <Posts />
      
        {children}
     
        
    </div>
  )
}
