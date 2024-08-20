import type { Meta, StoryObj } from "@storybook/react";
import TitlePage from "../ui/TitlePage";

const meta: Meta<typeof TitlePage> = {
  component: TitlePage,
};

export default meta;
type Story = StoryObj<typeof TitlePage>;

export const Contacts: Story = {
  args: {
    title: "Contacts",
  },
};

export const Favorites: Story = {
  args: {
    title: "Favorites",
  },
};
