import React,{useState} from 'react'
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core"
import db from './firebase';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:"Muhteşem Yıldıray",
            username:'nasiyapalim_',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/853265500691996672/BH2bl5RE_400x400.jpg"
        });

        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/853265500691996672/BH2bl5RE_400x400.jpg" />
                    <input 
                    onChange= {(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening?" type="text" />
                </div>
                <input 
                value={tweetImage}
                onChange= {(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL" type="text" />

                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox