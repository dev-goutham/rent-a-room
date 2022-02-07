import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Pagination from "."

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    numberOfPages: {
      type: "number",
    },
    currentPage: {
      type: "number",
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})

Default.args = {
  numberOfPages: 10,
  onPageChange: () => {
    console.log("page change")
  },
  currentPage: 1,
}
