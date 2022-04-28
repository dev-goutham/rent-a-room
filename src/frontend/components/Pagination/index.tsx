import React from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import PaginationButton from "@frontend/ui/PaginationButton"
import useGetListingsUrl from "@frontend/hooks/useGetListingUrl"

interface Props {
  numberOfPages: number
  currentPage: number
}

const Pagination: React.FC<Props> = ({ numberOfPages, currentPage }) => {
  const { setPaginate } = useGetListingsUrl()

  const hasNextPage = currentPage < numberOfPages
  const hasPrevPage = currentPage > 1

  return (
    <div className="flex gap-2">
      <PaginationButton
        isDisabled={!hasPrevPage}
        onClick={() => {
          setPaginate(currentPage - 1)
        }}
      >
        <BiChevronLeft className="inline-block" />
      </PaginationButton>

      {new Array(numberOfPages).fill(0).map((_, i) => (
        <PaginationButton
          key={i}
          isActive={currentPage === i + 1}
          isDisabled={false}
          onClick={() => {
            setPaginate(i + 1)
          }}
        >
          {i + 1}
        </PaginationButton>
      ))}

      <PaginationButton
        isDisabled={!hasNextPage}
        onClick={() => {
          setPaginate(currentPage + 1)
        }}
      >
        <BiChevronRight className="inline-block" />
      </PaginationButton>
    </div>
  )
}

export default Pagination
