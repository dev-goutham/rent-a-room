import React from "react"
import Button from "@frontend/ui/Button"
import Link from "next/link"

const CTA: React.FC = () => {
  return (
    <section className="mx-auto my-8 text-center">
      <h4 className="mb-4 text-3xl font-semibold text-lightBlue-800">
        Rent a room for your next holiday
      </h4>
      <Link href="/listins/united-states">
        <a>
          <Button variant="fill">Popular listings in United States</Button>
        </a>
      </Link>
    </section>
  )
}

export default CTA
