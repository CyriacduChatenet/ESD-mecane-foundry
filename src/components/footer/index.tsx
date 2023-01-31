import { FC } from "react";

export const Footer: FC = () => {
    const date = new Date();
    return (
        <footer>
            <p className="text-xl">©{date.getFullYear()} Mecanes foundry, all rights reserved, by Cyriac du Chatenet & Dimitri Zordan</p>
        </footer>
    );
};