import React from 'react'

const TicketBook = ({formData, nextPage,prevPage, uploadedImageUrl, handleSubmit, handleChange}) => {
  return (
    <div className=''>
        <div className='text-white text-center my-4  '>
            <h1 className='text-xl'>Your Ticket is Booked</h1>
            <p> check your email for a copy or you can download</p>
        </div>

      <div className='border-[#0e4a54] border w-[300px] mx-auto rounded-2xl p-4  bg-linear-to-b from-deep-green to to-mid-green'>

          <div>
            <h1 className='text-center text-white text-xl'>Techember fest</h1>
            <p className='text-white text-center text-xs'>04 runners road, ikoyi, lagos <br /> march 15 2025 | 7:00pm</p>
          </div>
          <figure className='w-16 h-16 bg-amber-300 mx-auto my-4'>
              {uploadedImageUrl && (
                <img
                  src={uploadedImageUrl}
                  alt="Uploaded to Cloudinary"
                  style={{ width: "200px", height: "70px", marginTop: "20px" }}
                />
              )}
              
          </figure>

          <div className='  grid-cols-2 grid mx-auto border-[#0e4a54] border rounded-2xl'>

              <div className='text-white text-sm p-3 border-[#0e4a54] border-b border-r '>
                  <span className='text-white/50'>Enter your name</span>
                  <p className='text-xs text-wrap'>{formData.fullname}</p>
              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b '>
              <span className='text-white/50'>Enter your Email</span>
              <p className='text-xs text-wrap'>{formData.email}</p>
              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b border-r '>
                <span className='text-white/50'>Ticket Type</span>
                <p className='text-xs text-wrap'>{formData.fullname}</p>
              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b '>
                <span className='text-white/50'>Ticket For</span>
                <p className='text-xs text-wrap'>{formData.number}</p>
              </div>
              <div className='text-white col-span-2 text-sm p-3'>
                <span className='text-white/50'>Special Request?</span>
                <p>{formData.project ||"you want special offers"}</p>
              </div>

              <img src="/TICKET.png" alt="" />
              
          </div>
  
      </div>
        <div className='btn flex justify-between items-center  gap-x-3 py-5'>
            <button onClick={prevPage} className='flex-1 px-4 py-2 text-white  sm:text-xl text-xs border-[#0e4a54] border rounded-lg '>Back</button>
            <button onClick={handleSubmit}  className='flex-1 px-4 py-2 text-white sm:text-xl text-xs bg-[#24a0b5] rounded-lg'>Get free Ticket</button>
      </div>
    </div>
  )
}

export default TicketBook
