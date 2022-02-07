import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Tag from "."

export default {
  title: "UI/Tag",
  component: Tag,
  argTypes: {
    children: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />
export const Default = Template.bind({})
Default.args = { children: "apatment" }
