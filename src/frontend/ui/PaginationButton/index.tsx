import React from "react"

interface Props {
  isDisabled: boolean
  isActive?: boolean
}

const PaginationButton: React.FC<Props> = ({
  children,
  isDisabled,
  isActive = false,
}) => {
  return (
    <button
      className={`inline-block px-2 py-1  leading-none ease-in duration-150 border-2 rounded-md ${
        isDisabled
          ? "opacity-40 pointer-events-none"
          : "opacity-100 hover:border-blue-500 hover:text-blue-500"
      } ${
        isActive
          ? "border-blue-400 text-blue-400"
          : "text-slate-400 border-slate-300 "
      }`}
    >
      {children}
    </button>
  )
}

export default PaginationButton
