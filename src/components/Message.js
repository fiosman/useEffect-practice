import { useEffect, useState } from "react";

function Message({ size }) {
  const [messageSize, setMessageSize] = useState();

  useEffect(() => {
    switch (size) {
      case "s":
        setMessageSize("small");
        break;
      case "m":
        setMessageSize("medium");
        break;
      case "l":
        setMessageSize("large");
        break;
      case "xl":
        setMessageSize("xlarge");
        break;
      default:
        setMessageSize("small");
        break;
    }
  }, [size]);
  return <div className={`message ${messageSize}`}>(Oh my! Your bird is naked!)</div>;
}

export default Message;
