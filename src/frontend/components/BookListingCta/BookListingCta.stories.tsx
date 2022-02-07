import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import BookListingCta from "."

export default {
  title: "Components/BookListingCta",
  component: BookListingCta,
} as ComponentMeta<typeof BookListingCta>

const Template: ComponentStory<typeof BookListingCta> = (args) => (
  <BookListingCta {...args} />
)

export const Default = Template.bind({})

Default.args = {
  price: 100,
}
