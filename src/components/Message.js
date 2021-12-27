import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [messageSize, setMessageSize] = useState();
  const [featherMessage, setFeatherMessage] = useState();

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

  useEffect(() => {
    if (Number(featherCount) < 1) {
      setFeatherMessage("Oh my, your bird is naked!");
    } else if (Number(featherCount) > 5) {
      setFeatherMessage("Woo! Now that's a turkey!");
    } else {
      setFeatherMessage("Not bad, but could be better");
    }
  }, [featherCount]);

  return <div className={`message ${messageSize}`}>{featherMessage}</div>;
}

export default Message;
