import React from "react";

export const Message = (props) => (
  <div className="text-center">
    {props.message ? <h3 className="message-header">Thank You</h3> : null}
    <div class="message-body">
      {" "}
      We will reply to your message in next 24h. Have a nice day! ;-){" "}
    </div>
  </div>
);
