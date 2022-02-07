import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Sort from "."

export default {
  title: "UI/Sort",
  component: Sort,
} as ComponentMeta<typeof Sort>

const Template: ComponentStory<typeof Sort> = (args) => <Sort {...args} />

export const Default = Template.bind({})

Default.args = {
  onSortChange: (option) => {
    console.log(option)
  },
}
