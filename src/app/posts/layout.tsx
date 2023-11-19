import SideNav from '@/app/components/SideNav';


export default function PostsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className='flex flex-row'>
        <SideNav />
      
        {children}
     
        
    </div>
  )
}
