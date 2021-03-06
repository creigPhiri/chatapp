import React from "react";

const Message = props => {
  const currentUser = props.currentUser === props.username ? "Me" : null;
  return (
    <div className="message" style={currentUser?{marginLeft:"30px"}:{}}>
      <div className="message-username" style={currentUser?{fontWeight:"bold", fontSize: 13, color:"var(--highlight-color)"}:{}}>
        {currentUser || props.username}</div>
      <div className="message-text" >
        {props.text}
      </div>
    </div>
  );
};

export { Message };
