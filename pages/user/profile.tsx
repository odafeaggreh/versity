import Layout from "../../components/desktop/layout";
import {useState} from "react";
import React from "react";
import { Advert, Feedback, Posts, Sidebar } from "../../components/profile";
import Link from "next/link";
import Empty from '../../assets/svg/empty.svg';

export default function Profile() {
    const [selectedMenu, setSelectedMenu] = useState(0);

    // ARRAY OF  ALL MENU VIEWS
    const menu = [<Advert />, <Feedback />, <Posts />]

	return (
        // MAYBE I'LL MAKE A BOOLEAN PROP TO SHOW SEARCH
		<Layout>
            <div className="mt-6 px-16">
            <div className="text-gray-500 text-lg">My Profile</div>
			<div className="flex flex-row justify-between mt-6 gap-x-4">
                {/* SIDEBAR*/}
                <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                {/* SIDEBAR END*/}

                {/* OPEN MENU */}
                <div className="w-3/4 overflow-hidden">
                    {/* TEMPORARY IMPLEMENTATION TILL ALL COMPONENTS ARE DONE */}
                    {![3,4,5].includes(selectedMenu) ? menu[selectedMenu] : <TempFallBack />}
                </div>

			</div>
            </div>
		</Layout>
	);
}


function TempFallBack() {
    return(
        <div className="flex flex-col">
            <div className="text-2xl text-atoll text-center">
                Nothing here yet!
            </div>
            
            {/* HERE YOU WOULD MAKE A LINK OR DESIGN TO REDIRECT A USER TO MAKE AN ACTION */}

            <div className="w-96 mx-auto">
                <Empty />
            </div>

            <Link href="/">
                <div className="text-center text-atoll">
                    Click here to make your own post now, For Free!!
                </div>
            </Link>
            
        </div>
    )
}