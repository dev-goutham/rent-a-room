import React from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import PaginationButton from "@frontend/ui/PaginationButton"

interface Props {
  onPageChange: (pageNumber: number) => void
  numberOfPages: number
  currentPage: number
}

const Pagination: React.FC<Props> = ({ numberOfPages, currentPage }) => {
  const hasNextPage = currentPage < numberOfPages
  const hasPrevPage = currentPage > 1

  return (
    <div className="flex gap-2">
      <PaginationButton isDisabled={!hasPrevPage}>
        <BiChevronLeft className="inline-block" />
      </PaginationButton>
      {new Array(numberOfPages).fill(0).map((_, i) => (
        <PaginationButton
          isActive={currentPage === i + 1}
          isDisabled={false}
          key={i}
        >
          {i + 1}
        </PaginationButton>
      ))}
      <PaginationButton isDisabled={!hasNextPage}>
        <BiChevronRight className="inline-block" />
      </PaginationButton>
    </div>
  )
}

export default Pagination
