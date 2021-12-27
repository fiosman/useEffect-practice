import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
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
  return (
    <div className={`message ${messageSize}`}>
      {Number(featherCount) < 1 ? "Oh my, your bird is naked!" : "Woohoo we got some feathers!"}
    </div>
  );
}

export default Message;
