import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Attend = ({
  formData,
  prevPage,
  imagePreview,
  isLoading,
  handleSubmit,
  activeButon,
  handleButton,
  uploadedImageUrl,
  handleChange,
  handleImageChange,
  formErrors,
}) => {
  const [validName, setValidName] = useState(
    USER_REGEX.test(formData.fullname)
  );
  const [validEmail, setValidEmail] = useState(
    EMAIL_REGEX.test(formData.email)
  );

  useEffect(() => {
    setValidName(USER_REGEX.test(formData.fullname));
  }, [formData.fullname]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(formData.email));
  }, [formData.email]);

  return (
    <div className="text-white bg-[#08252B] p-[1.5rem] py-3 rounded-2xl">
      <div className="form-control bg-[#08252B] rounded-2xl w-full  h-fit">
        <label htmlFor="profile" className="my-1 inline-block text-white">
          UploadProfile Photo
        </label>

        <div className=" flex bg-deep-green justify-center items-center h-[150px] w-full">
          <div className="flex group relative justify-center items-center border-[#24a0b5] border-4 flex-col bg-[#0E464F] rounded-3xl h-[120px] w-[200px] ">
            <img
              width={40}
              height={40}
              src="/cloud-download.png"
              alt="cloud "
            />
            <label
              htmlFor="uploadBtn"
              id="uploadLabel"
              className="text-center "
            >
              <div  className="absolute h-full top-0 right-0 bottom-0 left-0 ">
                {imagePreview && (
                  <>
                    <img
                      className="h-[115px] overflow-hidden  w-[200px] rounded-3xl"
                      src={imagePreview && imagePreview}
                    />
                  </>
                ) }
              </div>
              Drag & drop or <br />
              click to upload
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/png"
                name="file"
                id="uploadBtn"
                className=""
                required
                aria-required="true"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="my-2">
        <label className="my-1 inline-block text-white" htmlFor="fullname">
          Fullname
          <span
            className={`${
              validName ? "valid text-green-500 ml-2 text-xs" : "hidden"
            }`}
          >
            ✔ Correct
          </span>
          <span
            className={`${
              !formData.fullname || validName
                ? "hidden"
                : "text-red-400 ml-2 text-xs"
            }`}
          >
            ❌ minimum of 4 chars, max of 24 chars
          </span>
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className=" p-2 w-full outline-none border-[#0e4a54] border rounded-lg"
          required
          aria-required="true"
        />
        {formErrors.fullname}
      </div>

      <div className="my-2">
        <label className="my-1 inline-block text-white" htmlFor="email">
          Enter your Email
          <span
            className={`${
              validEmail ? "text-green-500 ml-2 text-xs" : "hidden"
            }`}
          >
            ✔ Valid
          </span>
          <span
            className={`${
              !formData.email || validEmail
                ? "hidden"
                : "text-red-400 ml-2 text-xs"
            }`}
          >
            ❌ should include @ . com
          </span>
        </label>
        <div
          className="flex border-[#0e4a54] border rounded-lg items-center
        "
        >
          <MdOutlineEmail className="pl-2" size={26} />
          <input
            className="w-full pl-4  p-2 outline-none"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            aria-required="true"
          />
        </div>
        <p>{formErrors.email}</p>
      </div>

      <div className="my-[1rem]">
        <label className="my-1 inline-block" htmlFor="about">
          Special Request?
        </label>
        <textarea
          className="w-full border-[#0e4a54] border rounded-lg p-2 resize-none"
          onChange={handleChange}
          name="project"
          value={formData.project}
          id="project"
          rows={3}
          placeholder="textarea"
          maxLength={40}
        ></textarea>
      </div>

      <div className="w-full flex sm:flex-row flex-col-reverse gap-y-3 justify-between items-center gap-x-3">
        <button
          onClick={prevPage}
          className="flex-1 px-4 py-2 w-full text-next-green font-jeju  border-mild-green border rounded-lg  sm:text-xl text-xs"
        >
          Back
        </button>
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="flex-1 px-4 py-2 w-full  text-[#fafafa] font-jeju sm:text-xl text-xs rounded-lg bg-[#24a0b5]"
        >
          {isLoading ? (
            <p className="animate animate-bounce ease-in-out">Loading ...</p>
          ) : (
            `Get My ${activeButon} Ticket`
          )}
        </button>
      </div>
    </div>
  );
};

export default Attend;
