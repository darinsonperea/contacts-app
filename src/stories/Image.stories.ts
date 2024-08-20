import type { Meta, StoryObj } from "@storybook/react";
import Image from "../ui/Image";

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const ImageWithoutUrl: Story = {
  args: {
    src: "https://media.revistagq.com/photos/5d5130eef1043a000920d7de/16:9/w_2560%2Cc_limit/los%2520simpson.jpg",
    alt: "Homer Happy",
    customizeClass: { height: "maxContent", width: "200px" },
    favorite: false,
  },
};

export const ImageWithUrl: Story = {
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMDC5o8-FK-SWe8Wv4FoYNPzx4DRih6vsYw&s",
    alt: "Saitama Mamado",
    customizeClass: {
      height: "maxContent",
      width: "200px",
    },
    favorite: false,
  },
};
