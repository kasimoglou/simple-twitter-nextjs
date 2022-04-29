import prisma from "../lib/prisma"
import { useState } from "react"
import Avatar from "../components/Avatar";
import Tweet from "../components/Tweet";

export default function Home({ tweets }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (evt) => {
    setMessage(evt.target.value)
  }

  const handleTweetSubmit = async (evt) => {
    const body = { message };
    await fetch('/api/tweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    setMessage('');
  }

  return (
    <>
      <h1 className="pl-4 pr-4 font-bold text-lg">Home</h1>
      {/* Compose tweet area */}
      <div className="p-4 flex">
        <Avatar />
        <div className="ml-3 flex flex-col flex-grow items-end">
          <textarea className="p-1 border-0 outline-none resize-none w-full" value={message} placeholder="What's happening?" onChange={handleMessageChange} />
          <button className="pl-4 pr-4 pt-2 pb-2 bg-blue-300 rounded-full" onClick={handleTweetSubmit}>Tweet</button>
        </div>
      </div>
      {/* Existing tweets area */}
      <div>
        {tweets.map(({ id, message }) => (
          <Tweet key={id} message={message} />
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const tweets = await prisma.Tweet.findMany();

  return {
    props: { tweets }
  }
}
