import React from 'react'

  // formErrors
  const TicketBook = ({formData, activeButton, handleButton, uploadedImageUrl, handleNewTicket, handleSubmit}) => {

      console.log(uploadedImageUrl)
  return (
    <section className='w-full '>
        <div className='text-white pt-3 text-center mb-8  '>
            <h1 className='text-2xl font-jeju'>Your Ticket is Booked</h1>
            <p className='font-jeju text-sm py-3 capitalize'> check your email for a copy or you can download</p>
        </div>
    <div  className='parentCard border  shadow-4xl  inset-shadow-[#24a0b5] w-[80%] mx-auto border-[#24a0b5] p-4  mt-2  bg-linear-to-t via-mid-green from-light-green to-deep-green'>
            <div className='childCard w-full'>
      <div  className=' border-[#24a0b5] border sm:w-[70%] w-full p-4 mx-auto rounded-2xl   bg-linear-to-b from-deep-green to to-mid-green'>

          <div>
            <img src="/Heading.png"  className="my-5"alt="logo" />
            <p className='text-white text-center capitalize text-sm'> 📍 04 runners road, ikoyi, lagos <br /> march 15 2025 | 7:00pm</p>
          </div>
          <figure className='w-20 h-20 border-mild-green border-3 rounded-lg bg-light-green mx-auto my-4'>
              {uploadedImageUrl && (
                <img
                  src={uploadedImageUrl}
                  alt="Uploaded to Cloudinary"
                  style={{ width: "200px", height: "70px" }}
                />
              )}
              
          </figure>

          <div className='  grid-cols-2 grid overflow-hidden mx-auto border-[#0e4a54] border rounded-2xl'>

              <div className='text-white text-sm p-3 border-[#0e4a54] border-b border-r '>
                  <span className='text-white/50  capitalize text-[10px]'>Enter your name</span>
                  <p className='text-sm text-wrap'>{formData.fullname}</p>
              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b '>
              <span className='text-white/50 capitalize text-[10px]'>Enter your Email</span>
              <p className='text-sm text-wrap'>{formData.email}</p>
              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b border-r '>
                <span className='text-white/50 capitalize text-[10px]'>Ticket Type</span>
                <p className='text-sm text-wrap' onClick={handleButton}>{activeButton}</p>
                {/* <p className='text-sm text-wrap'><ActiveButtonContent activeButton={activeButton}/></p> */}

              </div>
              <div className='text-white text-sm p-3 border-[#0e4a54] border-b '>
                <span className='text-white/50 capitalize text-[10px]'>Ticket For</span>
                <p className='text-sm text-wrap'>{formData.number}</p>
              </div>
              <div className='text-white col-span-2 text-sm p-3'>
                <span className='text-white/50 capitalize text-sm'>Special Request?</span>
                <p>{formData.project ||"Nil? or the users sad story they write in there, gets the whole space, Max of three rows."}</p>
              </div>

              
              
          </div>
  
      </div>
        </div>

    </div>
    <div className='inset-shadow-light-green w-[80%] mx-auto border-[#24a0b5] p-4 border   bg-radial via-mid-green from-light-green to-deep-green'>
      <img src="/Bar Code.png" className='mx-auto' alt="bar code" />
    </div>
        <div className='btn sm:flex grid grid-cols-1 gap-y-3 justify-between items-center relative gap-x-3 py-3'>
            <button onClick={handleNewTicket} className='flex-1 px-4 py-2 text-next-green font-jeju  sm:text-xl text-xs border-mild-green border rounded-lg '>Book Another ticket</button>
            <button onClick={handleSubmit}  className='flex-1 px-4 py-2 text-[#fafafa] font-jeju sm:text-xl text-xs bg-[#24a0b5] rounded-lg'>Download Ticket</button>
      </div>
    </section>
  )
}

export default TicketBook
