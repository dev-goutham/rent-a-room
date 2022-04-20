import cloudinary from "cloudinary"

const uploadImage = async (image: string): Promise<string> => {
  try {
    const res = await cloudinary.v2.uploader.upload(image, {
      folder: "RAR_assets",
    })
    return res.secure_url
  } catch (error) {
    throw new Error("Something went wrong while uploading the listing image")
  }
}

export default uploadImage
