import "./TweetButton.css";


const TweetButton = ({onClick}) => {
  return (
    <a className="twitterAnchor" title="share it on twitter" target="_blank" rel="noreferrer" href="https://twitter.com">
      <button className="tweetButton" onClick={onClick}>
        <i className="	fa fa-twitter"></i>
      </button>
    </a>
  );
};



export default TweetButton;