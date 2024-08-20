import type { Meta, StoryObj } from "@storybook/react";
import CustomMessage from "../ui/CustomMessage";

const meta: Meta<typeof CustomMessage> = {
  component: CustomMessage,
};

export default meta;
type Story = StoryObj<typeof CustomMessage>;

export const AddNewContacts: Story = {
  args: {
    message: "Add new Contacts",
  },
};

export const AddNewFavorites: Story = {
  args: {
    message: "Add new Favorites",
  },
};

export const AllContactsWithFavorite: Story = {
  args: {
    message: "It seems that you have all your contacts in favorites",
  },
};

export const WithoutFavoritesContacts: Story = {
  args: {
    message: "It looks like you don't have any favorite contact!!",
  },
};
