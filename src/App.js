import "./components/Wrapper"
import Wrapper from "./components/Wrapper";
import Messages from "./components/Message";
import AutherName from "./components/AutherName";
import ButtonBox from "./components/ButtonBox"
import NextButton from "./components/NextButton";
import FacebookButton from "./components/FacebookButton";
import TweetButton from "./components/TweetButton";

const App = () =>{
  return (
    <Wrapper>
      <Messages value="abcde" />
      <AutherName value="lmnopqr" />
      <ButtonBox>
        <FacebookButton/>
        <TweetButton/>
        <NextButton/>
      </ButtonBox>
    </Wrapper>
  )
};

export default App;
