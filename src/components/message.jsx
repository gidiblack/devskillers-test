import React from "react";

export const Message = (props) => (
  <div className="text-center">
    {props.header !== undefined ? (
      <h3 className="message-header">{props.header}</h3>
    ) : null}
    {props.text !== undefined ? (
      <div className="message-body">{props.text}</div>
    ) : (
      <div className="message-body">{props.children}</div>
    )}
  </div>
);
