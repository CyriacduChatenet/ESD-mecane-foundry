import { FC } from "react";

export const Form: FC = () => {
  return (
    <form action="" className="flex items-center justify-center w-screen h-40">
      <label htmlFor="" className="flex flex-col pr-4">
        <span className="mb-2 text-xl">Receive newsletter</span>
        <input type="email" placeholder="Enter your email" className="border-solid border-2 border-white bg-black px-4 py-1 w-60" />
      </label>
      <input type="submit" value="Submit" className="ml-4 mt-8 px-6 py-1 bg-white text-black rounded-lg font-bold" />
    </form>
  );
};
