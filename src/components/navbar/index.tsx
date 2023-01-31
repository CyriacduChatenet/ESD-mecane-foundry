import { FC } from "react";

export const Navbar: FC = () => {
    return (
        <nav className="fixed px-12 py-6 flex items-center justify-between w-full">
            <p className="text-6xl font-bold">Mecanes Foundry X Time theme</p>
            <div className="w-1/5 flex items-center justify-between">
                <p className="text-3xl">Contact</p>
                <button className="bg-white text-black px-4 py-2 text-2xl rounded-xl">Try it now</button>
            </div>
        </nav>
    );
};