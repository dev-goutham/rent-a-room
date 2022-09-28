import { useState, useEffect } from "react"
import { UseFormRegister, UseFormWatch, FieldError } from "react-hook-form"
import { AiOutlineCloudUpload } from "react-icons/ai"
import FormError from "./FormError"
import Required from "./Reauired"
import { FormFields } from "./types"
import base64Converter from "./utils/base64Converter"

const ImageUpload: React.FC<{
  register: UseFormRegister<FormFields>
  watch: UseFormWatch<FormFields>
  error: FieldError | undefined
}> = ({ register, watch, error }) => {
  const [base64Image, setBase64Image] = useState<string | null>(null)

  const images = watch("image")

  useEffect(() => {
    if (!images || !images[0]) {
      return
    }

    base64Converter(images[0])
      .then((res) => {
        setBase64Image(res as string)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [images])

  return (
    <div>
      <Required />
      <label htmlFor="image">
        <span>Image</span>
        {base64Image ? (
          <div className="h-[108px] relative cursor-pointer w-[108px] p-[8px] border-[1px] flex justify-center items-center border-slate-300 border-dotted">
            <img className="inline-block w-full h-full" src={base64Image} />
            <button
              onClick={() => {
                setBase64Image(null)
              }}
              className="absolute px-2 text-white bg-red-500 rounded-full -right-3 -top-3"
            >
              x
            </button>
          </div>
        ) : (
          <>
            <div className="h-[86px] cursor-pointer w-[86px] p-[8px] border-[1px] flex justify-center items-center border-slate-300 border-dotted relative">
              <div className="flex flex-col items-center text-slate-500">
                <AiOutlineCloudUpload className="w-6 h-6" />
                <span className="text-xs font-semibold lowercase">Upload</span>
              </div>
            </div>
            <input
              className="h-[1px] opacity-0"
              type="file"
              {...register("image")}
              id="image"
            />
          </>
        )}
        {error && <FormError message={error.type} />}
      </label>
    </div>
  )
}

export default ImageUpload
