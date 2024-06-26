
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function Layout() {
  return (
<main className='min-h-screen flex flex-col'>
<div className='main'>
  <div className='gradient' />
</div>
<div className='app'>
  <Header/>
    <div className='flex-grow p-4 mt-4 mb-4'>
      <Outlet />
    </div>
  <Footer/>
</div> 
</main>
  )
}

export default Layout







