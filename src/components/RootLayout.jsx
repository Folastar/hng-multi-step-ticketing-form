
import Header from './Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
        <Header/>

        <main className='min-h-dvh flex  justify-center'>
          
            <Outlet/>
          
        </main>
        {/* <Footer/> */}
    </>
  )
}



export default RootLayout
