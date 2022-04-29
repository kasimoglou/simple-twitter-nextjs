import Image from 'next/image'
import Link from 'next/link'
import TwitterLogo from '../public/icons8-twitter-48.png'
import HomeIcon from '../public/icons8-home-50.png'
import NotificationsIcon from '../public/icons8-notification-50.png'
import HashtagIcon from '../public/icons8-hashtag-50.png'

export default function LeftSideBar() {
    return (
        <div className="flex flex-col items-end p-3">
            <div className="text-xl w-[275px]">
                <Image src={TwitterLogo} alt="Twitter logo" />
                <ul>
                    <li>
                        <Link href="/">
                            <a className="flex flex-col items-start">
                                <div className="flex flex-row items-center hover:bg-gray-300 p-2 rounded-full">
                                    <Image src={HomeIcon} width="20" height="20" />
                                    <div className="ml-2" >Home</div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore">
                            <a className="flex flex-col items-start">
                                <div className="flex flex-row items-center hover:bg-gray-300 p-2 rounded-full">
                                    <Image src={HashtagIcon} width="20" height="20" />
                                    <span className="ml-2" >Explore</span>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications">
                            <a className="flex flex-col items-start">
                                <div className="flex flex-row items-center hover:bg-gray-300 p-2 rounded-full">
                                    <Image src={NotificationsIcon} width="20" height="20" />
                                    <span className="ml-2" >Notifications</span>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}