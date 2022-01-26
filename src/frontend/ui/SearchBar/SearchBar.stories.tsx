import React from "react"
import { ComponentMeta } from "@storybook/react"
import SearchBar from "."

export default {
  title: "UI/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

export const Default = () => (
  <SearchBar
    handleSubmit={() => {
      console.log("form submitted")
    }}
  />
)
