import React, { useState, useEffect } from "react";
import Attend from "./Attend";
import TicketSelection from "./TicketSelection";
import TicketBook from "./TicketBook";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { toast } from "react-toastify";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Form = ({activeButton,handleButton}) => {
  const history = useNavigate();
  const [page, setPage] = useState(()=>{
    const savedPage = localStorage.getItem('page')
    return savedPage? JSON.parse(savedPage):1
  });
  const [profileImage, setProfileImage]= useState("");
  const [imagePreview, setImagePreview] = useState("")
  const [isLoading,setIsLoading]=useState(false)
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
    const upload_preset=import.meta.env.VITE_UPLOAD_PRESET
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem("formData");
        return savedData
          ? JSON.parse(savedData)
          : {
              fullname: "",
              email: "",
              number: 1,
              project: "",
              file:''
              
            };
      });
      
    //  console.log(JSON.parse(savedData))

      useEffect(()=>{
        localStorage.setItem('page', JSON.stringify(page))
      },[page])
      useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
      }, [formData]);
      
      useEffect(() => {
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
          setFormData(JSON.parse(savedFormData));
        }
      }, []);
      

     
      



//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     number: 1,
//     project: "",
//     // file:''
//   });
  const [formErrors, setFormErrors] = useState({
    profileImage: "",
    fullname: "",
    email: "",
  });
  const FormTitles = ["", "Ticket Selection", "Attendee Details", "Ready"];
  
 
//   useEffect(()=>{
//     localStorage.setItem('formData', JSON.stringify(formData))
//   },[formData])
// useEffect(()=>{
//     const savedFormData=localStorage.getItem('formData') // this is used to get form data from localstorage on refresh
//     if(savedFormData){
//         setFormData(JSON.parse(savedFormData))
//     }
// },[])
  const nextPage = () => {
      if (page < 3) {
          setPage((nextPage) => nextPage + 1);

        
    }
  }; 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };
  const handleImageChange =(e)=>{
    setProfileImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0])) //to previwe a image
}
  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

//   const handleNext = () => {
//     if (isStep2Valid) {
//       // alert("goood")
//       toast.success("ticket created successfully");
//       navigate("/ticket");
//     } else {
//       toast.error("go back and fill all fields");
//     }
//   };

  const handleNewTicket=()=>{
    if(page===3){
      setPage(1)
     
    //   setFormData(
    //     {fullname: "",
    //         email: "",
    //         number: 1,
    //         project: "",
    //         file:''}
    //   )
    }
    // setUploadedImageUrl(null)
    setProfileImage()
    // window.location.reload()

  }
  
console.log(profileImage)
  
  console.log(imagePreview)








const handleSubmit = async(e) => {
    e.preventDefault();
    e.stopPropagation()
    // handleNext();
    const errors= {}
    if(!profileImage && !USER_REGEX.test(formData.fullname) &&!EMAIL_REGEX.test(formData.email) ) return toast.error('input all fields')
    if(!profileImage){
        errors.profileImage="foofksdms"
        alert('dfdf')
       return toast.error('invalid, profile image required')
       
       
       
    }
    if(!USER_REGEX.test(formData.fullname)){
          return toast.error("invalid, fullname should include four characters")
          
        }
        if(!EMAIL_REGEX.test(formData.email)){
             return toast.error("Email invalid,should incude @ .com")
   
        }

    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return;
    // setFormErrors(handleValidate(formData))
    // setIsSubmit(true)
    
    
    
    
    try{
        setIsLoading(true)
        let imageURL;
        if(profileImage && (profileImage.type==="image/png" || profileImage.type ==="image/jpg" || profileImage.type==="image/jpeg")){
            const image =new FormData()
            image.append("file",profileImage)
            image.append("cloud_name", "folastar")
            image.append("upload_preset", upload_preset)

            const response =await fetch(
                `https://api.cloudinary.com/v1_1/folastar/image/upload`,
                {
                    method:"POST",
                    body:image
                }
            )

            const imageData=await response.json()
            imageURL=imageData.secure_url
            setImagePreview(null)
            setUploadedImageUrl(imageURL)

            
        }
        // else if(!profileImage){
        //     toast.error("input required fields")
        //     return
        // }
        console.log(imagePreview)
        // alert(imageURL)
    }catch(error){
        setIsLoading(false)
    } finally{
        setIsLoading(false)
        setImagePreview(null)
    }

    
    
    

        nextPage()
       
  };



  const pageDisplay = () => {
    if (page === 1) {
      //   toast.success("lkl")
      return (
        <TicketSelection
          nextPage={nextPage}
          handleChange={handleChange}
          prevPage={prevPage}
          formData={formData}
        //   handleButton={handleButton}

        />
      );
      // return <Preview/>
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
        // setActiveButton={setActiveButton}
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
            <p>{formErrors.profileImage}</p>
            <div className="flex text-white flex-col sm:flex-row items-start justify-between sm:items-center">
              <h1 className="text-2xl font-jeju  transition-all delay-75 ease-in-out">
                {FormTitles[page]}

              </h1>
              <p>
                Step <span>{page}</span>/3
              </p>
            </div>

            <div className={`progress my-2  bg-light-green w-full h-1`}>

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
