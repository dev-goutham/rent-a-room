import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const useGetListingsUrl = () => {
  const { asPath, query, push } = useRouter()
  const [url, setUrl] = useState(asPath)

  const { location, page, sort } = query as {
    location?: string
    sort?: string
    page?: number
  }

  useEffect(() => {
    push(url)
  }, [url])

  const setPaginate = (pageNumber: number) => {
    setUrl(
      `listings?${
        location ? "location=" + location + "&" : ""
      }page=${pageNumber}${sort ? "&" + "sort=" + sort : ""}`,
    )
  }

  const setSort = (sort: string) => {
    setUrl(
      `listings?${location ? "location=" + location + "&" : ""}${
        page ? "page=" + page + "&" : ""
      }sort=${sort}`,
    )
  }

  return { url, setPaginate, setSort }
}

export default useGetListingsUrl
