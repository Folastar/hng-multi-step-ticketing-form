import Form from "./pages/Form";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import './App.css'
import Ticket from "./pages/Ticket";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  // console.log(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);


  return (
    <>

    <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Form/>}/>
          <Route path="/ticket" element={<Ticket/>}/>

        </Route>
          

      </Routes>
        
        
    
    </>
  )
}

export default App
