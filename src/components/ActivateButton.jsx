import React from 'react';

const ActiveButtonContent = ({ activeButton }) => {
  return (
    <div className="text-center my-4">
      {/* <h2 className="text-xl text-white">Selected Ticket Type:</h2> */}
      <span className="text-lg text-[#fafafa]">{activeButton}</span>
    </div>
  );
};

export default ActiveButtonContent;
