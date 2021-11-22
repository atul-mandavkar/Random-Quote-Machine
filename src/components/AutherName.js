import "./AutherName.css";


const AutherName = ({value}) => {
  return (
    <h4 className="autherName">
      <pre>--- </pre>
      {value}
    </h4>
  );
};


export default AutherName;