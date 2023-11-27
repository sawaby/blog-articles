
import Posts from '../components/Posts';


export default function PostsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className='md:flex'>
      {/* fixed top-[74px]  */}
        <div className='md:top-auto w-full md:w-auto z-1 md:z-auto md:static'>
        <Posts />
        </div>
        
        <div className=''>
        {children}
        </div>
        
        
    </div>
  )
}
