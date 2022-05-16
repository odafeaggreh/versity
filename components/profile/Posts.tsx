import { UserPosts } from "../cards";

export default function Posts() {
    return(
        <div className="flex flex-wrap gap-6">
            {Array(3).fill(0).map(item => (
                <div>
                    <UserPosts />
                </div>
            ))}
        </div>
    )
};
