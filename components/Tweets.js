import Tweet from "../components/Tweet";

export default function Tweets({ tweets = [], isLoading }) {
    if (isLoading) return <p>Loading...</p>
    if (tweets.length === 0) return <p>No tweets for now...</p>

    return (
        <div>
            {tweets.map(({ id, message }) => (
                <Tweet key={id} message={message} />
            ))}
        </div>
    )
}