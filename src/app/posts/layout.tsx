
import Posts from '../components/Posts';


export default function PostsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className='md:flex'>
        <div className='fixed top-[74px] md:top-auto w-full md:w-auto z-20 md:z-auto md:static'>
        <Posts />
        </div>
        
        <div className=''>
        {children}
        </div>
        
        
    </div>
  )
}
