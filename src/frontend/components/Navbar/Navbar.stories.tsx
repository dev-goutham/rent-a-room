import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Navbar from "."

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unauthenticated = Template.bind({})

export const Authenticated = Template.bind({})
Authenticated.args = {}
