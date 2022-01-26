import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import LinkButton from "."

export default {
  title: "UI/Button",
  component: LinkButton,
  argTypes: {
    children: {
      type: "string",
    },
    variant: {
      type: {
        name: "enum",
        value: ["fill", "transparant", "outline"],
      },
    },
  },
} as ComponentMeta<typeof LinkButton>

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args}></LinkButton>
)

export const FillButton = Template.bind({})

FillButton.args = {
  children: "Fill Button",
  variant: "fill",
}

export const TransparantButton = Template.bind({})

TransparantButton.args = {
  children: "Transparant Button",
  variant: "transparant",
}

export const OutlineButton = Template.bind({})

OutlineButton.args = {
  children: "Outline Button",
  variant: "outline",
}
