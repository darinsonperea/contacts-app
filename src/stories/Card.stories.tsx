import type { Meta, StoryObj } from "@storybook/react";
import Card from "../ui/Card";
import { ContactsTypes } from "../utils/types";
import Heart from "../icons/Heart";
import HeartBroken from "../icons/HeartBroken";
import { colors, defaultContacts } from "../utils/helper";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Card> = {
  component: Card,
  render: (_, { loaded: { contacts } }) =>
    contacts.map((contact: ContactsTypes) => (
      <Card contact={contact}>
        <button
          style={{
            color: contact.favorite ? colors["red-700"] : colors["green-light"],
          }}
        >
          {contact.favorite ? <HeartBroken /> : <Heart />}
        </button>
      </Card>
    )),
};

export default meta;
type Story = StoryObj<typeof Card>;

const person: ContactsTypes = {
  id: "2cb57f21-89f0-4e82-a785-094784acd6af",
  name: "Andy",
  lastName: "Martinez",
  email: "andy.martinez@gmail.com",
  favorite: false,
  avatar: "https://reqres.in/img/faces/8-image.jpg",
};

export const OnePerson: Story = {
  args: {
    contact: person,
  },
  render: (args) => {
    const [{ favorite }, updateArgs] = useArgs();

    function handleClick() {
      updateArgs({ favorite: !favorite });
    }

    const person = {
      ...args.contact,
      favorite: favorite,
    };

    return (
      <Card contact={person}>
        <button
          style={{
            color: favorite ? colors["red-700"] : colors["green-light"],
          }}
          onClick={handleClick}
        >
          {favorite ? <HeartBroken /> : <Heart />}
        </button>
      </Card>
    );
  },
};

export const ManyPersons: Story = {
  loaders: [
    async () => ({
      contacts: await defaultContacts(),
    }),
  ],
};
