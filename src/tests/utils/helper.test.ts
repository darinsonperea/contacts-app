import { defaultContacts, getGenderByName } from "../../utils/helper";

const contactsOriginal = [
  {
    name: "George",
    lastName: "Bluth",
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    favorite: false,
  },
  {
    name: "Janet",
    lastName: "Weaver",
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    favorite: false,
  },
  {
    name: "Emma",
    lastName: "Wong",
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    favorite: false,
  },
  {
    name: "Eve",
    lastName: "Holt",
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    favorite: false,
  },
  {
    name: "Charles",
    lastName: "Morris",
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    favorite: false,
  },
  {
    name: "Tracey",
    lastName: "Ramos",
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    favorite: false,
  },
  {
    name: "Michael",
    lastName: "Lawson",
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    favorite: false,
  },
  {
    name: "Lindsay",
    lastName: "Ferguson",
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    favorite: false,
  },
  {
    name: "Tobias",
    lastName: "Funke",
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    favorite: false,
  },
  {
    name: "Byron",
    lastName: "Fields",
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    favorite: false,
  },
  {
    name: "George",
    lastName: "Edwards",
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    favorite: false,
  },
  {
    name: "Rachel",
    lastName: "Howell",
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    favorite: false,
  },
];

describe("get gender by name function", () => {
  it("Should return the gender based in the passed name ", async () => {
    const female = await getGenderByName("Ana");
    const male = await getGenderByName("Pablo");

    expect(female).toBe("female");
    expect(male).toBe("male");
  });
});

describe("fetch default contacts function", () => {
  it("Should return a array with the default contacts", async () => {
    const contacts = await defaultContacts();

    expect(contacts).toStrictEqual(contactsOriginal);
  });
});
