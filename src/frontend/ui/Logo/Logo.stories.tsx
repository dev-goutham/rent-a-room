import React from "react"
import { ComponentMeta } from "@storybook/react"
import Logo from "."

export default {
  title: "UI/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>

export const Default = () => <Logo />
