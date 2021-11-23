import "./components/Wrapper"
import Wrapper from "./components/Wrapper";
import Messages from "./components/Message";
import AutherName from "./components/AutherName";
import ButtonBox from "./components/ButtonBox"
import NextButton from "./components/NextButton";
import TweetButton from "./components/TweetButton";
import React, {useState} from "react";

// To get data from json file first use import then use map method
import data from "./dataFile/quotes.json";

const quoteArray = data.map((ele)=>{
  return {quote: ele.quote,
  author: ele.author}
});
console.log(quoteArray.length);
const  quoteArrayLength = quoteArray.length;

const App = () => {
  const [state, setstate] = useState({
    num: 0,
    res: 0
  })

  const nextMessage = () =>{
    const newNum = Math.floor(Math.random() * quoteArrayLength);
    console.log(newNum);
    setstate({
      num : newNum
    });
  }

  const tweetQuote = () =>{
    // querySelector is used instead of getElementByClassName because querySelector give first match no need to use [0]
    const twitterPage1 = document.querySelector(".twitterAnchor");
    console.log(quoteArray[state.num].quote);
    // setAttribute is used to change href of anchor tag so that we can directly share quote on twitter
    twitterPage1.setAttribute("href", `https://twitter.com/share?text=${quoteArray[state.num].quote}%0A%09%2d%2d%2d%20${quoteArray[state.num].author}`);
    // %0A for next line in url, %09 for tab space in url, %2d for - sign in url, %20 for space in url
  }

  return (
    <Wrapper>
      <Messages value= {state.num ? quoteArray[state.num].quote : quoteArray[state.res].quote} />
      <AutherName value= {state.num ? quoteArray[state.num].author : quoteArray[state.res].author} />
      <ButtonBox>
        <TweetButton onClick={tweetQuote} />
        <NextButton onClick={nextMessage} />
      </ButtonBox>
    </Wrapper>
  );

};

export default App;
