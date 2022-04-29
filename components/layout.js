import LeftSideBar from "./LeftSideBar";

export default function Layout({ children }) {
    return (
        <div className="grid grid-cols-3">
            <LeftSideBar />
            <div className="p-3">{children}</div>
            <div></div>
        </div>
    )
}