import React from "react"
import { FiSearch } from "react-icons/fi"

interface Props {
  handleSubmit: () => void
}

const SearchBar: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex md:w-1/2 h-fit focus:outline-none"
    >
      <input
        placeholder="search for a city"
        className="flex-1 h-10 px-2 py-2 border-2 shadow-md outline-none focus:outline-none focus:ring-0 border-slate-100 rounded-tl-md rounded-bl-md"
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
