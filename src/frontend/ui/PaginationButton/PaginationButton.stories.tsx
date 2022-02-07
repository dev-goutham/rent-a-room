import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import PaginationButton from "."

export default {
  title: "UI/PaginationButton",
  component: PaginationButton,
  argTypes: {
    children: {
      type: "number",
    },
    isDisabled: {
      type: "boolean",
    },
    isActive: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof PaginationButton>

const Template: ComponentStory<typeof PaginationButton> = (args) => (
  <PaginationButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  isDisabled: false,
  children: 1,
  isActive: false,
}
