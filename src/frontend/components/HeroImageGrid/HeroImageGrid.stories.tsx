import React from "react"
import { ComponentMeta } from "@storybook/react"
import HeroImageGrid from "."

export default {
  title: "Components/HeroImageGrid",
  component: HeroImageGrid,
} as ComponentMeta<typeof HeroImageGrid>

export const Default = () => <HeroImageGrid />
