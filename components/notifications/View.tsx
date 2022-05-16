import Image from "next/image";
import useSWR from "swr";

// const url = `${process.env.BASE_URL}/api/notifications`;
const url = "http://varsity-api.herokuapp.com/api/notifications";

const fetcher = async () => {
    const res = await fetch(url);
    let data = await res.json();
    data = data.payload;
    return data;
};

const View = () => {
    const { data, error } = useSWR(url, fetcher);
    console.log("data from View(notifications): ", data);

    if (error) return error; // "An error has occurred"
    if (!data) return "Loading...";

    return (
        <div className="flex flex-col">
            <div className="text-gray-500 text-lg">Notifications</div>

            <div className="px-6 border border-gray-200 rounded-md shadow-md divide-y">
                {data.map((item) => (
                    <div className="flex flex-row justify-between py-6">
                        <div className="flex flex-row gap-x-2">
                            <div className="mr-4 rounded-full object-cover overflow-hidden">
                                <Image
                                    src="/avatar.png"
                                    height={60}
                                    width={60}
                                    className=""
                                />
                            </div>

                            <div className="my-auto text-atoll">
                                {item.name}
                            </div>

                            <div className="my-auto">{item.action}</div>

                            <div className="my-auto text-atoll text-lg">
                                "{item.post}"
                            </div>
                        </div>

                        <div>Today, 09:56 am</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;
