import { useState, useEffect } from "react"
import Avatar from "../components/Avatar";
import Tweets from "../components/Tweets";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!reload) {
      setLoading(true)
    }

    fetch('api/tweet')
      .then((res) => res.json())
      .then((data) => {
        setTweets(data);
        setLoading(false);
        setReload(false);
      })
  }, [reload])

  const handleMessageChange = (evt) => {
    setMessage(evt.target.value)
  }

  const handleTweetSubmit = async (evt) => {
    const body = { message };
    setMessage('');

    await fetch('/api/tweet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    setReload(true);
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
      <Tweets tweets={tweets} isLoading={isLoading} />
    </>
  )
}
