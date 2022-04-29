import AvatarIcon from '../public/icons8-user-female-skin-type-5-48.png'
import Image from "next/image"

export default function Avatar() {
    return (
        <div className="bg-gray-200 rounded-full p-1 w-[40px] h-[40px] flex justify-center">
            <Image src={AvatarIcon} width="30" height="30" />
        </div>
    )
}