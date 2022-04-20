import React from "react"

const FormError: React.FC<{ message: string | undefined }> = ({ message }) => (
  <div className="my-[2px]  font-semibold text-red-500">
    {message || "Invalid field"}
  </div>
)

export default FormError
