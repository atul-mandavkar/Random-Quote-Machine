import "./Message.css";


const Message = ({value}) => {
  return (
    <div className="message">
      <i className="fa fa-quote-left i1"></i>
        <h2 className="texts">
          {value}
        </h2>
      <i className="fa fa-quote-right i2"></i>
    </div>
  );
};


export default Message;