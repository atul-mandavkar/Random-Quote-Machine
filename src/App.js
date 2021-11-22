import "./components/Wrapper"
import Wrapper from "./components/Wrapper";
import Messages from "./components/Message";
import AutherName from "./components/AutherName";
import ButtonBox from "./components/ButtonBox"
import NextButton from "./components/NextButton";
import FacebookButton from "./components/FacebookButton";
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

  return (
    <Wrapper>
      <Messages value= {state.num ? quoteArray[state.num].quote : quoteArray[state.res].quote} />
      <AutherName value= {state.num ? quoteArray[state.num].author : quoteArray[state.res].author} />
      <ButtonBox>
        <FacebookButton/>
        <TweetButton/>
        <NextButton onClick={nextMessage} />
      </ButtonBox>
    </Wrapper>
  );

};

export default App;
