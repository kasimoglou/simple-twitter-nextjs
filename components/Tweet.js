import Avatar from "./Avatar";

export default function Tweet({ message }) {
    return (
        <div className="p-4 flex">
            <Avatar />
            <div className="flex items-center ml-2">
                {message}
            </div>
        </div>
    )
}