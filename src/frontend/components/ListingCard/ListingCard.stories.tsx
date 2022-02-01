import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import ListingCard from "."

export default {
  title: "Components/ListingCard",
  component: ListingCard,
  argTypes: {
    title: {
      type: "string",
    },
    address: {
      type: "string",
    },
    imageUrl: {
      type: "string",
    },
    numberOfGuests: {
      type: "number",
    },
    price: {
      type: "number",
    },
  },
} as ComponentMeta<typeof ListingCard>

const Template: ComponentStory<typeof ListingCard> = (args) => (
  <div className="w-[320px]">
    <ListingCard {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  imageUrl:
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  address: "20 Overlook St, Toronto, ON, CA",
  title: "Chic downtown condo",
  numberOfGuests: 4,
  price: 200,
}
