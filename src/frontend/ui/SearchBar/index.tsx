import React from "react"
import { FiSearch } from "react-icons/fi"

interface Props {
  handleSubmit: () => void
}

const SearchBar: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex max-w-sm lg:w-2/3 h-fit focus:outline-none"
    >
      <input
        placeholder="search for a city"
        className="flex-1 h-8 px-2 py-1 border-2 shadow-md outline-none focus:outline-none focus:ring-0 border-slate-50 rounded-tl-md rounded-bl-md"
      />
      <button
        type="submit"
        className="flex h-8 px-2 bg-blue-500 shadow-md rounded-tr-md rounded-br-md"
      >
        <FiSearch className="self-center inline-block leading-none text-white" />
      </button>
    </form>
  )
}

export default SearchBar
