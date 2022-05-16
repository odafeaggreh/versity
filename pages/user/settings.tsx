import Layout from "../../components/desktop/layout";
import {useState} from "react";
import React from "react";
import { Personal, Sidebar } from "../../components/settings";

export default function Settings() {
    const [selectedSetting, setSelectedSetting] = useState(0);

    // ARRAY OF  ALL MENU VIEWS
    const setting = [<Personal />]

	return (
        // MAYBE I'LL MAKE A BOOLEAN PROP TO SHOW SEARCH
		<Layout>
            <div className="mt-6 px-16">
            <div className="text-gray-500 text-lg">Settings</div>
			<div className="flex flex-row justify-between mt-6 gap-x-4">
                {/* SIDEBAR*/}
                <Sidebar />
                {/* SIDEBAR END*/}

                {/* OPEN MENU */}
                <div className="w-3/4 shadow-md rounded-md border overflow-hidden">
                    {setting[selectedSetting]}
                </div>

			</div>
            </div>
		</Layout>
	);
}
