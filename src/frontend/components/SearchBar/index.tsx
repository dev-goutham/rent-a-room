import { useRouter } from "next/router"
import React, { useRef } from "react"
import { FiSearch } from "react-icons/fi"

const SearchBar: React.FC = () => {
  const Router = useRouter()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!inputRef.current) {
      return
    }
    Router.push(`/listings?location=${inputRef.current.value}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex md:w-1/2 h-fit focus:outline-none"
    >
      <input
        placeholder="search for a city"
        className="flex-1 h-10 px-2 py-2 font-semibold text-gray-400 border-2 shadow-md outline-none placeholder:text-gray-300 focus:outline-none focus:ring-0 border-slate-100 rounded-tl-md rounded-bl-md"
        ref={inputRef}
      />
      <button
        type="submit"
        className="flex h-10 px-2 bg-blue-500 shadow-md rounded-tr-md rounded-br-md"
      >
        <FiSearch className="self-center inline-block leading-none text-white" />
      </button>
    </form>
  )
}

export default SearchBar
