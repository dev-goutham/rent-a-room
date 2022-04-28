import React from "react"

interface Props {
  isDisabled: boolean
  isActive?: boolean
  onClick: () => void
}

const PaginationButton: React.FC<Props> = ({
  children,
  isDisabled,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`inline-block px-2 py-[6px]  leading-none ease-in duration-150 border-2 rounded-md ${
        isDisabled
          ? "opacity-[0.35] pointer-events-none cursor-not-allowed"
          : "opacity-100 hover:border-blue-500 hover:text-blue-500"
      } ${
        isActive
          ? "border-blue-400 text-blue-400"
          : "text-slate-400 border-slate-300 "
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PaginationButton
