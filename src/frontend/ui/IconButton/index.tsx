import React from "react"
import { IconType } from "react-icons"

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  Icon: IconType
  variant: "fill" | "transparant" | "outline"
}

const IconButton: React.FC<Props> = ({ children, Icon, variant }) => {
  return (
    <button
      className={`px-4 py-2 leading-none ease-in duration-200 flex gap-2 rounded-md ${
        variant === "fill"
          ? "bg-blue-500 text-slate-50 hover:bg-blue-600"
          : variant === "outline"
          ? "border-2 border-blue-500 text-inherit hover:border-blue-600"
          : "bg-transparent text-inherit hover:text-opacity-80 hover:underline hover:underline-offset-4"
      }`}
    >
      <span>
        <Icon
          className={
            variant === "fill"
              ? "text-slate-50"
              : variant === "outline"
              ? "text-inherit"
              : "text-inherit"
          }
        />
      </span>
      <span>{children}</span>
    </button>
  )
}

export default IconButton
