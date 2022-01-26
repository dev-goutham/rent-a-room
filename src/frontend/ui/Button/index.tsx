import React from "react"

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "fill" | "transparant" | "outline"
}

const LinkButton: React.FC<Props> = ({ children, variant }) => {
  return (
    <button
      className={`px-4 py-2 leading-none rounded-md ${
        variant === "fill"
          ? "bg-blue-500 text-slate-50 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600"
          : variant === "outline"
          ? "border-2 border-blue-500 text-inherit hover:border-blue-600"
          : "bg-transparent text-inherit hover:text-opacity-80 hover:underline hover:underline-offset-4"
      }`}
    >
      {children}
    </button>
  )
}

export default LinkButton
