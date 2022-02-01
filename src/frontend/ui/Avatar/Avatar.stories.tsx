import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Avatar from "."

export default {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    imageUrl: {
      type: {
        name: "string",
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className="flex items-center justify-center w-screen h-screen">
    <Avatar {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  imageUrl:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto:compress&cs=tinysrgb&dpr=2&h=650&w=940",
  imageAlt: "image",
}
