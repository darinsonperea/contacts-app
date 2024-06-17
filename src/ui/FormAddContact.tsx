import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Contacts, add } from "../redux/slices/contactsSlice";
import { fakeUsers } from "../data/fakeData";

function FormAddContact() {
  const { register, reset, handleSubmit } = useForm<Contacts>();
  // const { errors } = formState;
  const dispatch = useDispatch();

  function onSubmit(data: Contacts) {
    const uuid = crypto.randomUUID();

    const newContact = {
      uuid,
      ...data,
      avatar: `https://i.pravatar.cc/?=${uuid}`,
    };

    dispatch(add(newContact));
    reset();
  }

  return (
    <div className="sm:flex justify-center">
      <form
        className="flex flex-col py-10 sm:px-20 items-center gap-3 bg-green-light w-full sm:w-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="First name"
          className="bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          autoFocus
          {...register("first_name", { required: "This field is required" })}
        />
        <input
          type="text"
          placeholder="Last name"
          className="bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          {...register("last_name", { required: "This field is required" })}
        />
        <input
          type="email"
          placeholder="Email"
          className=" bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          {...register("email", { required: "This field is required" })}
        />

        <div className="w-[285px] flex items-center justify-between my-5 text-sm">
          <label htmlFor="email" className="font-medium">
            Enable like favorite
          </label>
          <input
            type="checkbox"
            className="accent-green-dark h-4 w-4"
            {...register("favorite")}
          />
        </div>
        <button className="border-none bg-white px-3 py-1 rounded-md capitalize font-semibold text-xs tracking-widest shadow-button shadow-black-light">
          SAVE
        </button>
        <button
          className="border-none bg-white px-3 py-1 rounded-md capitalize font-semibold text-xs tracking-widest shadow-button shadow-black-light"
          onClick={() => fakeUsers.map((user) => onSubmit(user))}
        >
          Fake data
        </button>
      </form>
    </div>
  );
}

export default FormAddContact;
