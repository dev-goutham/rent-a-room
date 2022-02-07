import React from "react"

const Tag: React.FC = ({ children }) => {
  return (
    <div className="px-2 inline-block rounded-md py-1 text-xs bg-blue-50 border-[1px] border-blue-500 text-blue-800 tracking-wider lowercase">
      {children}
    </div>
  )
}

export default Tag
