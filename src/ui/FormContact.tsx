import { useForm } from "react-hook-form";
import { useCreate } from "../services/hooks/useCreate";
import { Contacts } from "../utils/types";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../redux/slices/contactsSlice";
import { getGenderByName, randomInteger } from "../utils/helper";
import MiniSpinner from "./MiniSpinner";

function FormContact() {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit, formState } = useForm<Contacts>();
  const { errors } = formState;
  const { createContact, isPending } = useCreate();

  async function onSubmit(data: Contacts) {
    const gender = await getGenderByName(data.name);
    const randomNumberPhoto = randomInteger(0, 78);

    const newContact = {
      ...data,
      avatar: `https://xsgames.co/randomusers/assets/avatars/${gender}/${randomNumberPhoto}.jpg`,
    };

    // dispatch(add(newContact));

    console.log(data);

    createContact(newContact, {
      onSuccess: () => {
        dispatch(toggleOpen());
        reset();
      },
    });
  }

  return (
    <div className="sm:flex justify-center dark:bg-black">
      <form
        className="flex flex-col py-10 sm:px-20 items-center gap-3 bg-green-light w-full sm:w-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          className="bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          autoFocus
          {...register("name", { required: "You must put your name here" })}
          disabled={isPending}
          autoComplete="off"
        />
        <span className="text-red-500 text-xs bottom-0">
          {errors.name?.message}
        </span>
        <input
          type="text"
          placeholder="Last name"
          className="bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          {...register("lastName", { required: "This field is required" })}
          disabled={isPending}
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className=" bg-green-form w-72 p-3 outline-none border-b border-white placeholder:text-custom-black placeholder:opacity-70 rounded-t-md placeholder:font-medium"
          {...register("email", { required: "This field is required" })}
          disabled={isPending}
          autoComplete="off"
        />

        <div className="w-[285px] flex items-center justify-between my-5 text-sm">
          <label htmlFor="favorite" className="font-medium">
            Enable like favorite
          </label>
          <input
            type="checkbox"
            className="accent-green-dark h-4 w-4"
            {...register("favorite")}
            disabled={isPending}
            id="favorite"
          />
        </div>
        <button
          className=" flex gap-2 border-none bg-white px-3 py-1 rounded-md capitalize font-semibold text-xs tracking-widest shadow-button shadow-black-light"
          disabled={isPending}
        >
          {isPending ? "Saving..." : "SAVE"}
          {isPending && <MiniSpinner />}
        </button>
      </form>
    </div>
  );
}

export default FormContact;
