import React, { useState } from 'react'

const Preview = ({imageURL}) => {

    const [profileImage, setProfileImage]= useState("");
    const [imagePreview, setImagePreview] = useState(null)
    const [isLoading,setIsLoading]=useState(false)
    const upload_preset=import.meta.env.VITE_UPLOAD_PRESET

    const handleImageChange =(e)=>{
        setProfileImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const uploadImage= async(e)=>{
        e.preventDefault()
        setIsLoading(true)

        try{
            let imageURL;
            if(profileImage && (profileImage.type==="image/png" || profileImage.type ==="image/jpg" || profileImage.type==="image/jpeg")){
                const image =new FormData()
                image.append("file",profileImage)
                image.append("cloud_name", "folastar")
                image.append("upload_preset", "fola123")

                const response =await fetch(
                    `https://api.cloudinary.com/v1_1/folastar/image/upload`,
                    {
                        method:"POST",
                        body:image
                    }
                )

                const imageData=await response.json()
                imageURL=imageData.secure_url.toString()
                setImagePreview(null)
                

            }
            alert(imageURL)

        }catch(error){
            setIsLoading(false)
        }
        finally{
            setIsLoading(false)

        }
    }
        console.log(imageURL)
  return (
    
      <section className="flex justify-center">
        <div className="container">
            <h2>upload to cloudinary</h2>
                    <div>
                        <img src={profileImage} alt="profile" />
                    </div>
            <div>
                <form onSubmit={uploadImage}>
                    <p>
                        <label htmlFor="">photo</label>
                        <input type="file"  accept='image/png' name='image' onChange={handleImageChange} />
                    </p>

                    <p>
                        {
                            isLoading?('uploadinhg') : (<button className='bg-yellow-400 p-4'>upload image</button>)
                        }
                    </p>
                </form>

                <div>
                    <div>
                        {imagePreview && (<img width={100} height={50}  src={imagePreview && imagePreview} alt='porfile image'/>)}
                    </div>

                </div>
            </div>
        </div>
      </section>
  )
}

export default Preview




