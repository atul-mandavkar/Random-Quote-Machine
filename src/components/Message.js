import "./Message.css";


const Message = ({value}) => {
  return (
    <h2 className="message">
      {value}
    </h2>
  );
};


export default Message;