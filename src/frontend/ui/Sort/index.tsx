import React from "react"

interface Props {
  onSortChange: (option: string) => void
}

const Sort: React.FC<Props> = ({ onSortChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    onSortChange(e.target.value)
  }

  return (
    <div className="w-[170px]">
      <select
        className="block w-full py-2 pl-3 pr-10 mt-1 text-sm rounded-md border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-600 sm:text-sm"
        onChange={handleChange}
        defaultValue={"htl"}
      >
        <option value={"htl"}>Price: High to Low</option>
        <option value={"lth"}>Price: Low to High</option>
      </select>
    </div>
  )
}

export default Sort
