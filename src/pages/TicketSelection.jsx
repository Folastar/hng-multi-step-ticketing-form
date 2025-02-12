import React from 'react'

const TicketSelection = ({formData, nextPage,prevPage, handleChange}) => {
  return (
    <div>
      <div className="form-container bg-light-green px-3 py-5 rounded-2xl ">
                <div className='text-center sm:p-5 p-2 border-2 rounded-2xl  border-[#0e4a54] bg-linear-to-t from-deep-green to to-mid-green '>
                    <h1 className='sm:text-2xl text-white underline underline-offset-7 mb-1 '>Techember fest ''25</h1>
                    <p className='text-white/50   text-sm'>join us for an unforgetable experience at <br /> wakajeje!!. Secure your spot now. <br />event locatin || current date</p>
                </div>

                <div className='w-full h-[2px] my-5 rounded-full bg-[#0e4a54]/40'></div>
               
                <label className='text-white' htmlFor="ticket-type">Select Ticket Type</label>
                <div className=' focus:bg-[#24a0b5] text-white rounded-2xl grid grid-cols-1 gap-3 sm:grid-cols-3 border-[#0e4a54] border px-2 py-2 overflow'>

                    <button type='button'  className='flex flex-col justify-around items-left   border-[#0e4a54] border py-1  px-1 rounded-xl'>
                        <span className='  rounded-sm text-[1.2rem] '>Free</span>
                        <div className='leading-loose my-1 text-left'>
                            <h1 className='text-xs text-white/50 uppercase '>Regular Access</h1>
                            <p className='text-xs text-white/50'>20/52</p>
                        </div>
                    </button>

                    <button type='button' className='flex items-left flex-col justify-around   border-[#0e4a54] border py-1  px-1 rounded-xl'>
                        <span className=' pr-2 rounded-sm text-[1.2rem] '>$150</span>
                        <div className='leading-loose my-1 text-left'>
                            <h1 className='text-xs text-white/50 uppercase'>vip Access</h1>
                            <p className='text-xs text-white/50'>20/52</p>
                        </div>
                    </button>

                    <button type='button' className='flex items-left  flex-col justify-around  border-[#0e4a54] border py-1  px-1 rounded-xl'>
                        <span className=' pr-2 rounded-sm text-[1.2rem] '>$150</span>
                        <div className='leading-loose my-1 text-left'>
                            <h1 className='text-xs text-white/50 uppercase '>vvip Access</h1>
                            <p className='text-xs text-white/50'>20/52</p>
                        </div>
                    </button>
                    

                </div>

                <div>
                    <label className='text-white' htmlFor="people">Number of Tickets</label>
                    <input type="number" name="number" id="number"  onChange={handleChange} value={formData.number}  className='w-full pl-2 py-2 text-white outline-none border-[#0e4a54] border rounded-md bg-deep-green'/>
                </div>

                <div className='flex  justify-between flex-grow items-center  w-full flex-wrap-reverse  gap-x-3 my-3'>
                    <button onClick={prevPage} className='flex-1 px-4 py-2 text-white  sm:text-xl text-xs border-[#0e4a54] border rounded-lg'>cancel</button>
                    <button onClick={nextPage} className='flex-1 px-4 py-2 text-white  sm:text-xl text-xs bg-[#24a0b5] rounded-lg'>next</button>

                </div>

            </div>
    </div>
  )
}

export default TicketSelection
