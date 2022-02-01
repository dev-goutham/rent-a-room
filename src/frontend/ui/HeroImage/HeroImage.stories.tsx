import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import HeroImage from "."

export default {
  title: "UI/HeroImage",
  component: HeroImage,
  argTypes: {
    imageUrl: {
      type: "string",
    },
  },
} as ComponentMeta<typeof HeroImage>

const Template: ComponentStory<typeof HeroImage> = (args) => (
  <HeroImage {...args} />
)

export const Default = Template.bind({})

Default.args = {
  imageUrl:
    "https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  imageAlt: "",
}
