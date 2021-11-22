import "./Message.css";


const Message = ({value}) => {
  return (
    <div className="message">
      <i class="fa fa-quote-left i1"></i>
        <h2 class="texts">
          {value}
        </h2>
      <i class="fa fa-quote-right i2"></i>
    </div>
  );
};


export default Message;