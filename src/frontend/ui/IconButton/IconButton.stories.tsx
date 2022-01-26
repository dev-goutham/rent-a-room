import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AiOutlineHome } from "react-icons/ai"
import IconButton from "."

export default {
  title: "UI/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      type: {
        name: "enum",
        value: ["fill", "outline", "transparant"],
      },
    },
    children: {
      type: "string",
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Fill = Template.bind({})
Fill.args = {
  variant: "fill",
  Icon: AiOutlineHome,
  children: "Fill Icon Button",
}

export const Transparant = Template.bind({})
Transparant.args = {
  variant: "transparant",
  Icon: AiOutlineHome,
  children: "Transparant Icon Button",
}

export const Outline = Template.bind({})
Outline.args = {
  variant: "outline",
  Icon: AiOutlineHome,
  children: "Outline Icon Button",
}
