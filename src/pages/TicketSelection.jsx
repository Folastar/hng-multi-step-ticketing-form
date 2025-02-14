import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActiveButtonContent from "../components/ActivateButton";
const TicketSelection = ({ formData,  nextPage, handleChange }) => {
    const navigate =useNavigate()
    const [activeButton, setActiveButton] = useState(() => {
        const savedData = localStorage.getItem('activeButton');
        return savedData ? JSON.parse(savedData) : "Free";
      });
      
      useEffect(() => {
        localStorage.setItem('activeButton', JSON.stringify(activeButton));
      }, [activeButton]);
      
const handleButton = (button) => {
    setActiveButton(button)
    console.log(button)
};


// const [activeButton, setActiveButton] = useState("Free");

// const handleButton = (button) => {
//     setActiveButton(button)
//     console.log(button)
// };

 

  const cancelClick=()=>{
    navigate("/ticket")
  }
 

  return (
    <div>
      <div className="form-container bg-light-green px-3 py-5 rounded-2xl ">
        <div className="text-center sm:p-5 p-2 border-2 rounded-2xl  border-[#0e4a54] bg-linear-to-t from-deep-green to to-mid-green ">
          
        <p className='text-sm text-wrap'>{activeButton}</p>
        
            <img src="/Heading.png" className=" mx-auto mb-1 " alt="logo" />
          
          <p className="text-white capitalize font-jeju py-4   text-sm leading-loose">
            join us for an unforgetable experience at <br />[Event Name]!. Secure
            your spot now. <br />
            Event Location || March 15, 2025 | 7:00 PM          </p>
        </div>
            <ActiveButtonContent activeButton={activeButton}/>
        <div className="w-full h-[2px] my-5 rounded-full bg-[#0e4a54]/40"></div>

        <label className="text-white">
          Select Ticket Type
        </label>
        <div className=" bg-deep-green text-white rounded-2xl grid grid-cols-1 gap-3 sm:grid-cols-3 border-[#0e4a54] border px-2 py-2 overflow">
          <button
          
            type="button"
            onClick={()=>handleButton("Free")}
            className={`flex flex-col justify-around items-left ${ activeButton === "Free" ? "bg-mid-green" : ""} border-mild-green border-2 py-1  px-1 rounded-xl`}
          >
            <span className="  rounded-sm text-[1.2rem] ">
              Free
            </span>
            <div className="leading-loose my-1 text-left">
              <h1 className="text-xs text-[#fafafa] uppercase ">
                Regular Access
              </h1>
              <p className="text-xs text-[#fafafa]">20/52</p>
              {/* {!clickedContent} */}
            </div>
          </button>

          <button
            onClick={()=>handleButton("VIP")}
            type="button"
            className={`flex items-left flex-col justify-around ${activeButton === "VIP"? "bg-mid-green": ""} border-2 border-mild-green  py-1  px-1 rounded-xl`}
          >
            <span className=" pr-2 rounded-sm text-[1.2rem] ">$150</span>
            <div className="leading-loose my-1 text-left">
              <h1 className="text-xs text-[#fafafa] uppercase">vip Access</h1>
              <p className="text-xs text-[#fafafa]">20/52</p>
            </div>
          </button>

          <button
            type="button"
            onClick={()=>handleButton("VVIP")}

            className={`flex items-left  flex-col ${activeButton==="VVIP"? "bg-mid-green" : ""} justify-around  border-mild-green border-2 py-1  px-1 rounded-xl`}
          >
            <span className=" pr-2 rounded-sm text-[1.2rem] ">$150</span>
            <div className="leading-loose my-1 text-left">
              <h1 className="text-xs text-[#fafafa] uppercase ">vvip Access</h1>
              <p className="text-xs text-[#fafafa]">20/52</p>
            </div>
          </button>
        </div>

        <div>
          <label className="text-white" htmlFor="number">
            Number of Tickets
          </label>
          <select id="number"  onChange={handleChange} value={formData.number}className="w-full pl-2 py-2 text-white outline-none border-[#0e4a54] border rounded-md bg-deep-green" name="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3" >
              3
            </option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {/* <input
            type="number"
            name="number"
            id="number"
            onChange={handleChange}
            value={formData.number}
            className="w-full pl-2 py-2 text-white outline-none border-[#0e4a54] border rounded-md bg-deep-green"
          /> */}
        </div>

        <div className="flex  justify-between flex-grow items-center  w-full flex-wrap-reverse  gap-x-3 my-3">
          <button
          type="button"
            onClick={cancelClick}
            className="flex-1 px-4 py-2 text-white  sm:text-xl text-xs border-[#0e4a54] border rounded-lg"
          >
            cancel
          </button>
          <button
            onClick={nextPage}
            className="flex-1 px-4 py-2 text-white  sm:text-xl text-xs bg-[#24a0b5] rounded-lg"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
