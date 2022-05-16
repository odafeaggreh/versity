import Chat from "../../../assets/svg/chat.svg";
import Share from "../../../assets/svg/share.svg";
import Like from "../../../assets/svg/thumb-up.svg";
import Flag from "../../../assets/svg/flag.svg";

const CommunityCard = ({ community }) => {
    const { title, author, postType } = community;

    return (
        <div className="w-[480px] h-[150px] relative border border-gray-200 rounded-md shadow-md overflow-hidden">
            <div className="flex flex-col gap-y-2 justify-between p-4 h-full">
                <div className="flex flex-row justify-between">
                    <div className="text-atoll font-medium">
                        {title ? title : "No Title Set"}{" "}
                        {/*  When is course registration closing for Unilag? */}
                    </div>

                    <div>
                        <Flag className="mt-1 w-4 h-4 text-atoll fill-current" />
                    </div>
                </div>

                <div>
                    by <span className="text-atoll">{author?.userName}</span>{" "}
                    {/* chrisanyanx */}- <span>{postType} </span>
                    {/* Education */}
                </div>

                <div className="text-gray-400 text-sm font-light">
                    Today, 9:56pm
                </div>

                <div className="flex flex-row gap-x-8 mt-2">
                    <div className="flex flex-row gap-x-2 text-gray-500 text-sm">
                        <div>
                            <Chat className="w-4 h-4 text-gray-400 hover:text-gray-600 fill-current cursor-pointer" />
                        </div>

                        <div className="font-light"> 31</div>
                    </div>

                    <div className="flex flex-row gap-x-2 text-gray-500 text-sm">
                        <div>
                            <Share className="w-4 h-4 text-gray-400 hover:text-gray-600 fill-current cursor-pointer" />
                        </div>

                        <div className="font-light">24</div>
                    </div>

                    <div className="flex flex-row gap-x-2 text-gray-500 text-sm">
                        <div>
                            <Like className="w-4 h-4 text-gray-400 hover:text-gray-600 fill-current cursor-pointer" />
                        </div>

                        <div className="font-light">421</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityCard;
