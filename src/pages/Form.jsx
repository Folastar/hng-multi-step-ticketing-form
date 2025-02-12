import React, { useState,useEffect } from 'react'
import Attend from './Attend'
import TicketSelection from './TicketSelection'
import TicketBook from './TicketBook'
import { useNavigate } from 'react-router-dom'
import Preview from '../components/Preview'
import { toast } from 'react-toastify'
const Form = () => {

    const history= useNavigate()
    const [page, setPage]=useState(1)
    const [formData,setFormData]= useState({
        fullname:"",
        email:"",
        number:1,
        project:""
    })

     ;
     
     const FormTitles = ["","Ticket Selection","Attendee Details", "Ready"]
     
    
        const isStep2Valid = formData.email.trim() !== "" &&formData.fullname.trim() !== "" && formData.project.trim() !== "";
        const nextPage=()=>{
            if(page <3){
            setPage((nextPage)=> nextPage+1)

            if(page===2 && isStep2Valid){
                setPage(3)
            }
        }

    }
    
    const prevPage=()=>{
        if(page>1){
            setPage((prevPage)=> prevPage -1)

        }
    }
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData, [name]:value})
    }

    const handleNext= ()=>{
        if(isStep2Valid){
            // alert("goood")
            toast.success("ticket created successfully")
            history("/ticket")
        }
        else{
        
            toast.error("go back and fill all fields")
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        e.stopPropagation()
        handleNext()
        
    }
    const pageDisplay= ()=>{
        if(page ===1){
                //   toast.success("lkl")
            return <TicketSelection nextPage={nextPage} handleChange={handleChange} prevPage={prevPage} formData={formData}/>
            // return <Preview/>
        }
        else if(page ===2){
            
            return <Attend  nextPage={nextPage} handleChange={handleChange} handleSubmit={handleSubmit} prevPage={prevPage} formData={formData}/>
        }
        else{return <TicketBook  nextPage={nextPage} handleChange={handleChange} handleSubmit={handleSubmit} prevPage={prevPage} formData={formData}/>}
    }


  return (
    <div className='form sm:w-[35%] mb-2 w-[80%]'>
        <form onSubmit={handleSubmit}>

                <div className='px-10 py-2 bg-deep-green border-[#0e4a54] border rounded-2xl'>
                    <div className='progress  '>
                        <div className='flex text-white justify-between items-center'>
                            <h1 className='text-2xl transition-all delay-75 ease-in-out'>{FormTitles[page]}</h1>
                            <p>Step <span>{page}</span>/3</p>
                        </div>

                        <div className={`progress my-2  bg-light-green w-full h-1`}>
                            <div className={` bg-[#24a0b5] transition-all delay-75 h-1 ${page===1?  "w-[33%]": page===2?"w-[66%]" :"w-[100]"} `}></div>
                        </div>
                    </div>

                        <div className='transition-all delay-200'>
                            {pageDisplay()}
                        </div>
                    
                        {/* <div className='btn  flex justify-between mt-2 items-center gap-x-3'>
                            <button onClick={prevPage} className='flex-1 px-4 py-2 text-white  sm:text-xl text-xs border-[#0e4a54] border rounded-lg'>Back</button>
                            <button onClick={nextPage} className='flex-1 px-4 py-2 text-white sm:text-xl text-xs bg-[#24a0b5] border-[#0e4a54] border rounded-lg'>{page ===1? "Next": page===2? 'Get my free ticket':'View Tickets'}</button>
                        </div> */}
                    
                </div>
            
        </form>
    </div>
  )
}

export default Form
