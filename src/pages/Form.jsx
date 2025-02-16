import React, { useState, useEffect } from "react";
import Attend from "./Attend";
import TicketSelection from "./TicketSelection";
import TicketBook from "./TicketBook";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Form = () => {
  const history = useNavigate();
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");
    return savedPage ? JSON.parse(savedPage) : 3;
  });
  const [profileImage, setProfileImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullname: "",
          email: "",
          number: 1,
          project: "",
        };
  });

  const [activeButton, setActiveButton] = useState(() => {
    const savedData = localStorage.getItem("activeButton");
    return savedData ? JSON.parse(savedData) : "Free";
  });

  useEffect(() => {
    localStorage.setItem("activeButton", JSON.stringify(activeButton));
  }, [activeButton]);

  const handleButton = (button) => {
    setActiveButton(button);
    console.log(button);
  };

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const [formErrors, setFormErrors] = useState({
    profileImage: "",
    fullname: "",
    email: "",
  });
  const FormTitles = ["", "Ticket Selection", "Attendee Details", "Ready"];

  const nextPage = () => {
    if (page < 3) {
      setPage((nextPage) => nextPage + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const [imagePreview, setImagePreview] = useState(() => {
    return localStorage.getItem("imagePreview") || null;
  });

  // Save to local storage whenever imagePreview changes
  useEffect(() => {
    if (imagePreview) {
      localStorage.setItem("imagePreview", imagePreview);
    }      
     else {
      localStorage.removeItem("imagePreview");
    }
  }, [imagePreview]);

  // Handle image selection
  // const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         const previewURL = URL.createObjectURL(file);
  //         setImagePreview(previewURL);  // Set state and persist
  //     }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; //target only one element in a file || accepts onylone input
    if (file) {
      setProfileImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0])); // creates a local url to preview your file
    } else {
      setProfileImage('')
      setImagePreview(null); 

      // setImagePreview(null);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNewTicket = () => {
    if (page === 3) {
      setPage(1);
      // Clear form data state
      setFormData({
        fullname: "",
        email: "",
        number: 1,
        project: "",
      });

      // Clear image states
      setProfileImage(null);
      setImagePreview(null);

      // Clear form data from local storage
      localStorage.removeItem("formData");
      localStorage.removeItem("activeButton");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const errors = {};
    if (
      !profileImage &&
      !USER_REGEX.test(formData.fullname) &&
      !EMAIL_REGEX.test(formData.email)
    )
      return toast.error("input all fields");

    if (!profileImage) {
      return toast.error("upload profile picture");
    }
    if (!USER_REGEX.test(formData.fullname)) {
      return toast.error(
        "FullName Invalid, should include at least four characters"
      );
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      return toast.error("Email invalid, should inculde @ .com");
    }
    // if(!)
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    try {
      setIsLoading(true);
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "folastar");
        image.append("upload_preset", "fola123");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/folastar/image/upload`,
          {
            method: "POST",
            body: image, // tthis is what is content sent to cloudinary
          }
        );

        const imageData = await response.json();
        imageURL = imageData.secure_url;
        setImagePreview(null);
        setUploadedImageUrl(imageURL);
      }

      console.log(imagePreview);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false); // stops isLoading state after data is gotten from cloudinary
    }

    nextPage(); //moves you to the next page
  };

  const pageDisplay = () => {
    if (page === 1) {
      return (
        <TicketSelection
          nextPage={nextPage}
          handleChange={handleChange}
          prevPage={prevPage}
          formData={formData}
          handleButton={handleButton}
          activeButton={activeButton}
        />
      );
    } else if (page === 2) {
      return (
        <Attend
          nextPage={nextPage}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          uploadedImageUrl={uploadedImageUrl}
          prevPage={prevPage}
          formData={formData}
          activeButon={activeButton}
          isLoading={isLoading}
          imagePreview={imagePreview}
          profileImage={profileImage}
          formErrors={formErrors}
        />
      );
    } else {
      return (
        <TicketBook
          nextPage={nextPage}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          prevPage={prevPage}
          formData={formData}
          uploadedImageUrl={uploadedImageUrl}
          handleNewTicket={handleNewTicket}
          handleButton={handleButton}
          activeButton={activeButton}
        />
      );
    }
  };

  return (
    <div className="sm:w-[40%] mb-2 w-[90%]">
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-2 bg-deep-green border-[#0e4a54] border rounded-2xl">
          <div className="progress">
            <div className="flex text-white flex-col sm:flex-row items-start justify-between sm:items-center">
              <h1 className="text-2xl font-jeju  transition-all delay-75 ease-in-out">
                {FormTitles[page]}
              </h1>
              <p>
                Step <span>{page}</span>/3
              </p>
            </div>

            <div className={`progress my-2  bg-[#0E464F] w-full h-1`}>
              <div
                className={` bg-[#24a0b5] transition-all delay-75 h-1 ${
                  page === 1 ? "w-[33%]" : page === 2 ? "w-[66%]" : "w-[100%]"
                } `}
              ></div>
            </div>
          </div>

          <div className="transition-all delay-200">{pageDisplay()}</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
