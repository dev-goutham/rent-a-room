import React from "react"

interface Props {
  onSortChange: (option: string) => void
}

const Sort: React.FC<Props> = ({ onSortChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    if (!e.target.value) {
      return
    }
    onSortChange(e.target.value)
  }

  return (
    <div className="flex items-baseline gap-2">
      <div className="text-xl font-semibold text-blue-700">Sort by price</div>
      <div className="w-[170px]">
        <select
          className="block w-full py-2 pl-3 pr-10 text-sm rounded-md border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-600 sm:text-sm"
          onChange={handleChange}
          defaultValue={""}
        >
          <option value={""}></option>
          <option value={"htl"}>Price: High to Low</option>
          <option value={"lth"}>Price: Low to High</option>
        </select>
      </div>
    </div>
  )
}

export default Sort
