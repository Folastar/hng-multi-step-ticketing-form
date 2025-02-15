import React from "react";

// formErrors
const TicketBook = ({
  formData,
  activeButton,
  handleButton,
  uploadedImageUrl,
  handleNewTicket,
  handleSubmit,
}) => {
  console.log(uploadedImageUrl);
  return (
    <section className="w-full relative  ">
      <div className="text-white pt-3 text-center mb-8  ">
        <h1 className="text-2xl font-jeju">Your Ticket is Booked</h1>
        <p className="font-jeju text-sm py-3 capitalize">
          {" "}
          check your email for a copy or you can download
        </p>
      </div>
      <div className="parentCard  my-5 relative sm:w-[90%]  w-[100%] mx-auto  sm:p-4  mt-2  ">
        <div className="border-2  border-mild-green sm:w-[90%]  w-[80%]  sm:h-[490px] h-[580px] p-4 mx-auto rounded-2xl   ">
          <div>
            <img src="/Heading.png"  className="my-5 px-4"alt="logo" />
            <p className='text-white text-center capitalize text-sm'> 📍 04 runners road, ikoyi, lagos <br /> march 15 2025 | 7:00pm</p>
            </div>
          <div
            style={{ backgroundImage: `url(${uploadedImageUrl})` }}
            className="sm:w-40 w-30 absolute    sm:top-35 left-0 right-0 sm:h-30 h-30 bg-mid-green border-mild-green border-3 rounded-lg  mx-auto my-4 "
          ></div>

          <div className="  absolute sm:bottom-[145px] bottom-[195px] p-4 left-0 right-0 w-[60%] h-[30%] grid-cols-2 place-content-center bg-mid-green grid mt-10  mx-auto border-[#0e4a54] border-2 rounded-2xl">
            <div className="text-white text-sm  border-[#0e4a54] border-b-2 border-r-2 ">
              <span className="text-white/50  capitalize text-[10px]">
                Enter your name
              </span>
              <p className="text-xs text-wrap break-words">
                {formData.fullname}
              </p>
            </div>
            <div className="text-white text-sm max-w-fit  border-[#0e4a54] border-b-2 ">
              <span className="text-white/50 capitalize text-[10px]">
                Enter your Email
              </span>
              <p className="text-[10px] text-wrap break-words">
                {formData.email}
              </p>
            </div>
            <div className="text-white text-sm  border-[#0e4a54] border-b-2 border-r-2 ">
              <span className="text-white/50 capitalize text-[10px]">
                Ticket Type
              </span>
              <p className="text-[10px] text-wrap" onClick={handleButton}>
                {activeButton}
              </p>
              {/* <p className='text-sm text-wrap'><ActiveButtonContent activeButton={activeButton}/></p> */}
            </div>
            <div className="text-white text-sm  border-[#0e4a54] border-b-2 ">
              <span className="text-white/50 capitalize text-[10px]">
                Ticket For
              </span>
              <p className="text-[10px] text-wrap">{formData.number}</p>
            </div>
            <div className="text-white col-span-2 text-sm ">
              <span className="text-white/50 capitalize text-sm">
                Special Request?
              </span>
              <p className="break-words text-[10px]">
                {formData.project ||
                  "Nil? or the users sad story they write in there, gets the whole space, Max of three rows."}
              </p>
            </div>
          </div>
        </div>

      </div>
        <div className="absolute bottom-25 left-0 right-0  inset-shadow-light-green w-[80%] mx-auto p-4   overflow-hidden ">
          <img
            src="/Bar Code.png"
            className="mx-auto max-w-50"
            alt="bar code"
          />
        </div>

      <div className="btn sm:flex grid grid-cols-1 gap-y-3 justify-between items-center relative gap-x-3 py-3">
        <button
          onClick={handleNewTicket}
          className="flex-1 px-4 py-2 text-next-green font-jeju  sm:text-xl text-xs border-mild-green border rounded-lg "
        >
          Book Another Ticket
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 px-4 py-2 text-[#fafafa] font-jeju sm:text-xl text-xs bg-[#24a0b5] rounded-lg"
        >
          Download Ticket
        </button>
      </div>
    </section>
  );
};

export default TicketBook;
