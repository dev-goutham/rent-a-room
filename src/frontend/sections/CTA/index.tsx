import React from "react"
import Button from "@frontend/ui/Button"
import Link from "next/link"
import Section from "@frontend/ui/Section"

const CTA: React.FC = () => {
  return (
    <Section>
      <div className="mx-auto text-center">
        <h4 className="mb-4 text-3xl font-semibold text-blue-800">
          Rent a room for your next holiday
        </h4>
        <Link href="/listins/united-states">
          <a>
            <Button variant="fill">Popular listings in United States</Button>
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default CTA
